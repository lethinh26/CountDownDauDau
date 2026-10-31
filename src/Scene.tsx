import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { lickReaction, lickReach, skyTime, type Weather } from './logic';
import { Garden } from './Art';

export type SceneAction = 'frog' | 'berry' | 'house' | 'ghost' | 'sky';
type Props = { now: Date; weather: Weather | null; action: { name: SceneAction; id: number } | null; onInteract: (name: SceneAction) => void };

export default function Scene({ now, weather, action, onInteract }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const latest = useRef({ now, weather, onInteract });
  const trigger = useRef<(name: SceneAction) => void>(() => {});
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => { latest.current = { now, weather, onInteract }; }, [now, weather, onInteract]);
  useEffect(() => { if (action) trigger.current(action.name); }, [action]);

  useEffect(() => {
    const container = host.current!;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); }
    catch { setFailed(true); return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.setClearColor(0, 0);
    container.appendChild(renderer.domElement);
    const world = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 80);
    camera.position.set(6.3, 5.7, 11);
    const target = new THREE.Vector3(0, 1.7, 0);
    camera.lookAt(target);
    const ambient = new THREE.HemisphereLight(0xfffaf0, 0xb0a0ba, 2);
    world.add(ambient);
    const sunlight = new THREE.DirectionalLight(0xffe6b8, 3);
    sunlight.position.set(-4, 9, 6);
    sunlight.castShadow = true;
    sunlight.shadow.mapSize.set(512, 512);
    Object.assign(sunlight.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 0.5, far: 25 });
    sunlight.shadow.normalBias = 0.06;
    world.add(sunlight);
    const rim = new THREE.DirectionalLight(0xd7c7fa, 1.5);
    rim.position.set(3, 4, -4); world.add(rim);
    const materials = new Map<string, THREE.MeshStandardMaterial>();
    const material = (color: string) => {
      if (!materials.has(color)) materials.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.88 }));
      return materials.get(color)!;
    };
    const sphere = new THREE.SphereGeometry(1, 24, 16);
    const mesh = (parent: THREE.Object3D, geometry: THREE.BufferGeometry, color: string, position: number[], scale = [1, 1, 1]) => {
      const object = new THREE.Mesh(geometry, material(color));
      object.position.set(...position as [number, number, number]);
      object.scale.set(...scale as [number, number, number]);
      object.castShadow = true; object.receiveShadow = true;
      parent.add(object); return object;
    };
    const ball = (parent: THREE.Object3D, color: string, position: number[], scale: number[]) => mesh(parent, sphere, color, position, scale);
    const group = (name: string, position: number[]) => {
      const object = new THREE.Group(); object.name = name;
      object.position.set(...position as [number, number, number]); world.add(object); return object;
    };
    const island = group('island', [0, -0.12, 0]);
    ball(island, '#d9c4e2', [0, -0.12, 0], [4.3, 0.52, 3.25]);
    ball(island, '#e9e3d3', [0, 0.13, 0], [4.28, 0.27, 3.22]);
    ball(island, '#d2d6ba', [-1, 0.35, 0.2], [1.4, 0.04, 1]);
    ball(island, '#e5d3e7', [2.1, 0.35, -0.1], [1.1, 0.04, 1.1]);
    const pathGeometry = new THREE.CylinderGeometry(0.3, 0.34, 0.09, 10);
    for (let index = 0; index < 5; index++) mesh(world, pathGeometry, '#d3becb', [-0.25 + Math.sin(index) * 0.18, 0.3, 0.65 + index * 0.43], [1, 1, 0.8]);

    const house = group('house', [0, 0.25, -0.65]);
    for (let index = 0; index < 9; index++) {
      const angle = index / 9 * Math.PI * 2;
      ball(house, index % 2 ? '#edb58c' : '#f1bf94', [Math.sin(angle) * 0.88, 1.27, Math.cos(angle) * 0.85], [0.72, 1.28, 0.73]);
    }
    ball(house, '#eac6a4', [0, 0.24, 0], [1.52, 0.2, 1.4]);
    const stem = mesh(house, new THREE.CylinderGeometry(0.16, 0.26, 0.65, 9), '#92a17b', [0, 2.7, 0]); stem.rotation.z = -0.25;
    const leaf = ball(house, '#aabd8b', [0.48, 2.56, 0.1], [0.6, 0.1, 0.26]); leaf.rotation.z = 0.18;
    ball(house, '#987286', [0, 0.67, 1.48], [0.47, 0.67, 0.12]);
    mesh(house, new THREE.BoxGeometry(0.82, 0.58, 0.16), '#987286', [0, 0.38, 1.49]);
    ball(house, '#bc9aa2', [0, 0.65, 1.59], [0.36, 0.56, 0.035]);
    ball(house, '#ffe2a5', [0.23, 0.6, 1.64], [0.055, 0.055, 0.04]);
    mesh(house, new THREE.CylinderGeometry(0.6, 0.68, 0.14, 24), '#c6a2ae', [0, 0.08, 1.6], [1, 1, 0.57]);
    const windowMaterial = new THREE.MeshStandardMaterial({ color: '#ffebb4', emissive: '#ffbf62', emissiveIntensity: 0.55, roughness: 0.6 });
    for (const side of [-1, 1]) {
      ball(house, '#9b7a89', [side * 0.88, 1.45, 1.25], [0.36, 0.39, 0.12]);
      const pane = new THREE.Mesh(new THREE.CircleGeometry(0.28, 24), windowMaterial);
      pane.position.set(side * 0.88, 1.45, 1.38); house.add(pane);
      mesh(house, new THREE.BoxGeometry(0.045, 0.56, 0.04), '#a07c89', [side * 0.88, 1.45, 1.4]);
      mesh(house, new THREE.BoxGeometry(0.56, 0.045, 0.04), '#a07c89', [side * 0.88, 1.45, 1.4]);
    }
    const porchLight = new THREE.PointLight(0xffc985, 0, 5, 2);
    porchLight.position.set(0, 1.5, 1.5); house.add(porchLight);

    const frog = group('frog', [-1.55, 0.36, 1.55]); frog.rotation.y = 0.28;
    ball(frog, '#9fb98b', [0, 0.43, 0], [0.48, 0.48, 0.38]);
    ball(frog, '#e3e8bb', [0, 0.4, 0.3], [0.32, 0.31, 0.11]);
    ball(frog, '#afc79a', [0, 0.95, 0], [0.58, 0.36, 0.4]);
    for (const side of [-1, 1]) {
      ball(frog, '#afc79a', [side * 0.32, 1.23, 0.04], [0.23, 0.23, 0.2]);
      ball(frog, '#fff9df', [side * 0.32, 1.25, 0.2], [0.145, 0.16, 0.07]);
      ball(frog, '#464f49', [side * 0.32 + 0.025, 1.25, 0.262], [0.062, 0.09, 0.03]);
      ball(frog, '#fff9ee', [side * 0.32 + 0.04, 1.29, 0.286], [0.021, 0.024, 0.013]);
      ball(frog, '#e1b0a4', [side * 0.4, 0.88, 0.315], [0.115, 0.055, 0.025]);
      ball(frog, '#92ac80', [side * 0.35, 0.09, 0.18], [0.28, 0.12, 0.24]);
      const arm = ball(frog, '#9fb98b', [side * 0.43, 0.43, 0.04], [0.15, 0.28, 0.16]); arm.rotation.z = side * 0.35;
    }
    const smile = new THREE.EllipseCurve(0, 0, 0.14, 0.085, Math.PI, Math.PI * 2, false, 0);
    const smileGeometry = new THREE.BufferGeometry().setFromPoints(smile.getPoints(20).map(point => new THREE.Vector3(point.x, point.y + 0.87, 0.39)));
    frog.add(new THREE.Line(smileGeometry, new THREE.LineBasicMaterial({ color: '#52614b' })));
    const hat = new THREE.Group(); hat.position.set(-0.16, 1.41, -0.04); hat.rotation.z = 0.15; frog.add(hat);
    mesh(hat, new THREE.CylinderGeometry(0.49, 0.49, 0.07, 24), '#857293', [0, 0, 0]);
    mesh(hat, new THREE.ConeGeometry(0.34, 0.7, 24), '#9180a0', [0, 0.35, 0]);
    mesh(hat, new THREE.CylinderGeometry(0.28, 0.32, 0.12, 24), '#d9b3a1', [0, 0.09, 0]);
    ball(hat, '#f5dca0', [0, 0.1, 0.3], [0.06, 0.06, 0.025]);

    const berry = group('berry', [1.65, 0.35, 1.6]); berry.rotation.y = 0.24;
    const berryGeometry = new THREE.SphereGeometry(0.6, 28, 20);
    const berryPosition = berryGeometry.attributes.position;
    for (let index = 0; index < berryPosition.count; index++) {
      const height = berryPosition.getY(index);
      const taper = 0.66 + (height + 0.6) / 1.2 * 0.34;
      berryPosition.setXYZ(index, berryPosition.getX(index) * taper, height, berryPosition.getZ(index) * taper);
    }
    berryGeometry.computeVertexNormals();
    mesh(berry, berryGeometry, '#f2d67c', [0, 0.63, 0], [1, 1.08, 0.82]);
    for (let row = 0; row < 3; row++) for (let column = 0; column < 5; column++) {
      const latitude = -0.65 + row * 0.55;
      const angle = -1.1 + column * 0.55;
      const taper = 0.66 + (Math.sin(latitude) + 1) * 0.17;
      ball(berry, '#fff2bf', [Math.sin(angle) * Math.cos(latitude) * 0.61 * taper, 0.63 + Math.sin(latitude) * 0.65, Math.cos(angle) * Math.cos(latitude) * 0.51 * taper], [0.024, 0.045, 0.018]);
    }
    for (let index = 0; index < 5; index++) {
      const angle = index * Math.PI * 2 / 5;
      const crown = ball(berry, '#a6ba88', [Math.sin(angle) * 0.2, 1.23, Math.cos(angle) * 0.2], [0.14, 0.06, 0.34]);
      crown.rotation.y = angle;
    }
    for (const side of [-1, 1]) {
      ball(berry, '#72594c', [side * 0.17, 0.72, 0.435], [0.037, 0.065, 0.025]);
      ball(berry, '#eeb5a0', [side * 0.31, 0.58, 0.36], [0.085, 0.04, 0.025]);
      ball(berry, '#e6c675', [side * 0.21, 0.06, 0.05], [0.17, 0.075, 0.15]);
    }
    ball(berry, '#a77d58', [0, 0.58, 0.444], [0.055, 0.025, 0.018]);
    const tongue = mesh(world, new THREE.CylinderGeometry(0.045, 0.045, 1, 12), '#ef9cab', [0, 0, 0]);
    const tongueTip = ball(world, '#f4a8b6', [0, 0, 0], [0.065, 0.045, 0.065]);
    const tongueStart = new THREE.Vector3();
    const tongueTarget = new THREE.Vector3();
    const tongueDirection = new THREE.Vector3();
    const tongueAxis = new THREE.Vector3(0, 1, 0);
    let lickStart = -100;
    let lickContact = false;
    let reactionStart = -100;
    const reactionCanvas = document.createElement('canvas');
    reactionCanvas.width = 256; reactionCanvas.height = 128;
    const reactionContext = reactionCanvas.getContext('2d')!;
    reactionContext.font = 'bold 80px sans-serif';
    reactionContext.textAlign = 'center'; reactionContext.textBaseline = 'middle';
    reactionContext.lineWidth = 10; reactionContext.lineJoin = 'round';
    reactionContext.strokeStyle = '#fff4db'; reactionContext.fillStyle = '#586248';
    reactionContext.strokeText('>:V', 128, 64); reactionContext.fillText('>:V', 128, 64);
    const reactionTexture = new THREE.CanvasTexture(reactionCanvas);
    reactionTexture.colorSpace = THREE.SRGBColorSpace;
    const reactionMaterial = new THREE.MeshBasicMaterial({ map: reactionTexture, transparent: true, depthTest: false, depthWrite: false });
    const reactionText = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.7), reactionMaterial);
    reactionText.visible = false; reactionText.renderOrder = 2; world.add(reactionText);

    const ghost = group('ghost', [2.15, 2.95, -0.45]);
    ball(ghost, '#fff5ee', [0, 0, 0], [0.35, 0.44, 0.3]);
    for (let index = 0; index < 3; index++) ball(ghost, '#fff5ee', [(index - 1) * 0.21, -0.32, 0], [0.14, 0.15, 0.24]);
    for (const side of [-1, 1]) {
      ball(ghost, '#77677f', [side * 0.11, 0.02, 0.28], [0.033, 0.059, 0.024]);
      ball(ghost, '#e7b9bd', [side * 0.21, -0.07, 0.24], [0.056, 0.033, 0.015]);
    }
    ball(ghost, '#77677f', [0, -0.12, 0.29], [0.034, 0.043, 0.018]);

    for (const [horizontal, depth, height] of [[-2.7, -0.8, 2.4], [2.6, -1.5, 2.8], [-1.8, -2, 2.1]]) {
      mesh(world, new THREE.CylinderGeometry(0.085, 0.14, height, 8), '#bba0ae', [horizontal, height / 2, depth]);
      ball(world, '#c5b1d5', [horizontal, height, depth], [0.7, 0.95, 0.67]);
      ball(world, '#d5bddf', [horizontal - 0.3, height - 0.35, depth + 0.08], [0.48, 0.6, 0.48]);
      ball(world, '#cdb8df', [horizontal + 0.3, height - 0.25, depth], [0.45, 0.65, 0.45]);
    }
    const mushroomCap = new THREE.SphereGeometry(0.28, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    for (const [horizontal, depth, size] of [[-2.8, 1.6, 1], [-2.5, 1.9, 0.65], [2.8, 0.7, 0.9], [3, 0.2, 0.65], [-0.8, -2.4, 0.8]]) {
      mesh(world, new THREE.CylinderGeometry(0.07, 0.085, 0.4, 8), '#f3e7d2', [horizontal, 0.42, depth], [size, size, size]);
      mesh(world, mushroomCap, '#dba7b4', [horizontal, 0.42 + size * 0.2, depth], [size, size, size]);
      ball(world, '#fff0dd', [horizontal - 0.07, 0.42 + size * 0.43, depth + 0.05], [0.05 * size, 0.023, 0.05 * size]);
    }
    for (let index = 0; index < 11; index++) {
      const angle = index * 2.4;
      const horizontal = Math.sin(angle) * 3.45;
      const depth = Math.cos(angle) * 2.5;
      ball(world, index % 2 ? '#bac6a2' : '#e2c9d8', [horizontal, 0.32, depth], [0.2, 0.2, 0.25]);
    }

    const sun = group('sun', [-3.4, 4.5, -2.4]);
    const solarMaterial = new THREE.MeshBasicMaterial({ color: '#ffe1a1' });
    const solarDisc = new THREE.Mesh(sphere, solarMaterial); solarDisc.scale.setScalar(0.5); sun.add(solarDisc);
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.64, 48), new THREE.MeshBasicMaterial({ color: '#ffe4bb', transparent: true, opacity: 0.5, side: THREE.DoubleSide }));
    halo.quaternion.copy(camera.quaternion); sun.add(halo);
    const moon = group('moon', [2, 4.8, -3]);
    const crescent = new THREE.Shape();
    crescent.moveTo(0.18, 0.51);
    crescent.bezierCurveTo(-0.55, 0.5, -0.67, -0.42, 0.03, -0.51);
    crescent.bezierCurveTo(0.32, -0.54, 0.49, -0.32, 0.51, -0.17);
    crescent.bezierCurveTo(-0.08, -0.42, -0.31, 0.16, 0.18, 0.51);
    const lunar = new THREE.Mesh(new THREE.ExtrudeGeometry(crescent, { depth: 0.09, bevelEnabled: true, bevelSize: 0.045, bevelThickness: 0.04, bevelSegments: 3, steps: 1 }), new THREE.MeshBasicMaterial({ color: '#ffeac3' }));
    lunar.quaternion.copy(camera.quaternion); moon.add(lunar);
    const clouds = group('clouds', [0, 0, 0]);
    const cloudMaterial = material('#fff5f1');
    for (const [horizontal, height, depth, size] of [[-3, 3.8, -1, 0.8], [2.7, 4.1, -2, 1], [-0.2, 4.8, -4, 0.65]]) {
      for (let index = 0; index < 3; index++) ball(clouds, '#fff5f1', [horizontal + (index - 1) * 0.38, height + (index === 1 ? 0.14 : 0), depth], [0.48 * size, 0.24 * size, 0.3 * size]);
    }
    const starPositions = new Float32Array(100 * 3);
    for (let index = 0; index < 100; index++) starPositions.set([(Math.random() - 0.5) * 17, 2.8 + Math.random() * 5, -5 - Math.random() * 3], index * 3);
    const starsGeometry = new THREE.BufferGeometry(); starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: '#fff5d8', size: 0.055, transparent: true, opacity: 0 });
    const stars = new THREE.Points(starsGeometry, starsMaterial); world.add(stars);
    const meteorGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0.45, 0)]);
    const meteorMaterial = new THREE.LineBasicMaterial({ color: '#fff1c8', transparent: true, opacity: 0 });
    const meteor = new THREE.Line(meteorGeometry, meteorMaterial); world.add(meteor);
    const rainPositions = new Float32Array(220 * 6);
    for (let index = 0; index < 220; index++) {
      const offset = index * 6;
      rainPositions[offset] = (Math.random() - 0.5) * 11;
      rainPositions[offset + 1] = Math.random() * 9;
      rainPositions[offset + 2] = (Math.random() - 0.5) * 7;
    }
    const rainGeometry = new THREE.BufferGeometry(); rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
    const rain = new THREE.LineSegments(rainGeometry, new THREE.LineBasicMaterial({ color: '#c2d5e7', transparent: true, opacity: 0.55 }));
    rain.frustumCulled = false; world.add(rain);
    const ripples = Array.from({ length: 8 }, (_, index) => {
      const ripple = new THREE.Mesh(new THREE.RingGeometry(0.15, 0.17, 20), new THREE.MeshBasicMaterial({ color: '#e9edf8', transparent: true, side: THREE.DoubleSide }));
      ripple.rotation.x = -Math.PI / 2; ripple.position.set(Math.sin(index * 2.5) * 2.7, 0.38, Math.cos(index * 2.5) * 2.2);
      world.add(ripple); return ripple;
    });
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, -0.2); heartShape.bezierCurveTo(-0.55, 0.15, -0.15, 0.5, 0, 0.25); heartShape.bezierCurveTo(0.15, 0.5, 0.55, 0.15, 0, -0.2);
    const heartGeometry = new THREE.ShapeGeometry(heartShape);
    const heartMaterial = new THREE.MeshBasicMaterial({ color: '#e9a7bc', transparent: true, side: THREE.DoubleSide });
    const hearts = Array.from({ length: 7 }, () => { const heart = new THREE.Mesh(heartGeometry, heartMaterial); world.add(heart); heart.visible = false; return heart; });
    let animationTime = 0;
    let burstStart = -100;
    let active: SceneAction = 'frog';
    let lampOn = false;
    const burstOrigin = new THREE.Vector3();
    const actors = { frog, berry, house, ghost, sky: sun };
    trigger.current = name => {
      active = name; burstStart = animationTime;
      actors[name].getWorldPosition(burstOrigin); burstOrigin.y += name === 'house' ? 2.5 : 0.8;
      if (name === 'house') lampOn = !lampOn;
      if (name === 'berry') { lickStart = animationTime; lickContact = false; }
    };
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const down = { x: 0, y: 0 };
    const pointerDown = (event: PointerEvent) => { down.x = event.clientX; down.y = event.clientY; };
    const pointerUp = (event: PointerEvent) => {
      if (Math.hypot(event.clientX - down.x, event.clientY - down.y) > 12) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects([frog, berry, house, ghost], true);
      let object: THREE.Object3D | null = hits[0]?.object ?? null;
      while (object && !Object.values(actors).includes(object as THREE.Group)) object = object.parent;
      latest.current.onInteract((object?.name as SceneAction) || 'sky');
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height); camera.aspect = width / Math.max(height, 1);
      camera.position.set(6.3, 5.7, 11).multiplyScalar(Math.max(1, 1.15 / camera.aspect));
      camera.lookAt(target); camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize); observer.observe(container); resize();
    let inView = true;
    const visibility = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; }); visibility.observe(container);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let last = 0;
    let disposed = false;
    const warm = new THREE.Color('#ffe0a1');
    const cold = new THREE.Color('#b9b8ef');
    const clearCloud = new THREE.Color('#fff5f1');
    const rainyCloud = new THREE.Color('#969aaa');
    const render = (timestamp: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(render);
      if (document.hidden || !inView || timestamp - last < (reduced.matches ? 200 : 33)) return;
      const delta = Math.min((timestamp - last) / 1000, 0.1); last = timestamp; animationTime += delta;
      const time = skyTime(latest.current.now);
      const isNight = time.phase === 'night';
      const rainActive = latest.current.weather?.raining ?? false;
      const cover = (latest.current.weather?.clouds ?? 25) / 100;
      const daylight = time.daylight;
      sunlight.intensity = THREE.MathUtils.lerp(sunlight.intensity, (isNight ? 0.32 : 1.1 + daylight * 2.8) * (rainActive ? 0.35 : 1 - cover * 0.45), 0.04);
      sunlight.color.copy(cold).lerp(warm, isNight ? 0 : daylight);
      ambient.intensity = THREE.MathUtils.lerp(ambient.intensity, isNight ? 0.85 : rainActive ? 1.35 : 2, 0.04);
      ambient.color.set(isNight ? '#beb9eb' : '#fff5ed');
      sun.visible = !isNight && !rainActive && cover < 0.9;
      sun.position.y = 4.2 + daylight * 0.8;
      moon.visible = isNight;
      lunar.material.transparent = true; lunar.material.opacity = rainActive ? 0.3 : 1;
      starsMaterial.opacity = isNight ? (rainActive ? 0.12 : 0.8) * (reduced.matches ? 1 : 0.85 + Math.sin(animationTime * 1.2) * 0.15) : 0;
      clouds.scale.setScalar(0.8 + cover * 0.45);
      cloudMaterial.color.lerp(rainActive ? rainyCloud : clearCloud, 0.04);
      const motion = reduced.matches ? 0 : 1;
      clouds.position.x = Math.sin(animationTime * 0.12) * 0.18 * motion;
      ghost.position.y = 2.95 + Math.sin(animationTime * 1.7) * 0.16 * motion;
      ghost.rotation.z = Math.sin(animationTime) * 0.09 * motion;
      frog.scale.y = 1 + Math.sin(animationTime * 2) * 0.014 * motion;
      berry.rotation.z = Math.sin(animationTime * 1.5) * 0.025 * motion;
      const age = animationTime - burstStart;
      frog.position.y = 0.36 + (active === 'frog' && age < 1 ? Math.sin(age * Math.PI) * 0.7 * motion : 0);
      if (active === 'berry' && age < 1.5) berry.rotation.z += Math.sin(age * 12) * 0.22 * (1 - age / 1.5) * motion;
      const lickAge = animationTime - lickStart;
      const reach = reduced.matches ? (lickAge < 0.3 ? 1 : 0) : lickReach(lickAge);
      if (reach === 1 && !lickContact) { reactionStart = animationTime; lickContact = true; }
      const reaction = lickReaction(animationTime - reactionStart);
      frog.position.y += reaction.jolt * 0.18 * motion;
      frog.rotation.z = reaction.jolt * -0.16 * motion;
      reactionText.visible = reaction.opacity > 0;
      reactionText.position.set(frog.position.x, 2.75 + reaction.rise * motion, frog.position.z);
      reactionText.quaternion.copy(camera.quaternion);
      reactionMaterial.opacity = reaction.opacity;
      berry.localToWorld(tongueStart.set(0, 0.58, 0.47));
      berry.localToWorld(tongueTip.position.set(0, 0.46, 0.53));
      frog.localToWorld(tongueTarget.set(0.4, 0.88, 0.35));
      tongueTip.position.lerp(tongueTarget, reach);
      tongueDirection.subVectors(tongueTip.position, tongueStart);
      tongue.position.copy(tongueStart).addScaledVector(tongueDirection, 0.5);
      tongue.scale.y = tongueDirection.length();
      tongue.quaternion.setFromUnitVectors(tongueAxis, tongueDirection.normalize());
      if (active === 'ghost' && age < 1.5) ghost.rotation.y = Math.sin(age / 1.5 * Math.PI) * Math.PI * 2 * motion;
      else ghost.rotation.y = 0;
      windowMaterial.emissiveIntensity = lampOn ? 2 : isNight ? 0.8 : 0.12;
      porchLight.intensity = lampOn ? 4 : isNight ? 1.5 : 0;
      for (const [index, heart] of hearts.entries()) {
        heart.visible = age < 2.4 && !reduced.matches;
        heart.position.copy(burstOrigin).add(new THREE.Vector3(Math.sin(index * 2.4) * age * 0.45, age * 0.9 + index * 0.07, Math.cos(index * 2.4) * age * 0.35));
        heart.quaternion.copy(camera.quaternion); heart.scale.setScalar(0.3 + index % 3 * 0.1);
      }
      heartMaterial.opacity = Math.max(0, 1 - age / 2.4);
      const meteorAge = active === 'sky' && age < 1.5 ? age : animationTime % 13;
      meteor.visible = isNight && !reduced.matches && meteorAge < 1.5;
      meteor.position.set(3 - meteorAge * 5, 6 - meteorAge * 2, -3);
      meteorMaterial.opacity = Math.sin(meteorAge / 1.5 * Math.PI) * (rainActive ? 0.2 : 1);
      rain.visible = rainActive;
      if (rainActive) {
        const speed = 3 + Math.min(latest.current.weather?.precipitation ?? 0, 6);
        for (let index = 0; index < 220; index++) {
          const offset = index * 6;
          if (!reduced.matches) rainPositions[offset + 1] -= delta * speed;
          if (rainPositions[offset + 1] < 0.4) rainPositions[offset + 1] = 8;
          rainPositions[offset + 3] = rainPositions[offset] + 0.04;
          rainPositions[offset + 4] = rainPositions[offset + 1] + 0.18;
          rainPositions[offset + 5] = rainPositions[offset + 2];
        }
        rainGeometry.attributes.position.needsUpdate = true;
      }
      for (const [index, ripple] of ripples.entries()) {
        ripple.visible = rainActive;
        const rippleAge = reduced.matches ? 0.4 : (animationTime * 0.65 + index * 0.16) % 1;
        ripple.scale.setScalar(0.2 + rippleAge * 2.5); ripple.material.opacity = (1 - rippleAge) * 0.45;
      }
      renderer.render(world, camera);
    };
    const contextLost = (event: Event) => { event.preventDefault(); disposed = true; cancelAnimationFrame(frame); setFailed(true); };
    renderer.domElement.addEventListener('webglcontextlost', contextLost);
    frame = requestAnimationFrame(render); setReady(true);
    return () => {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); visibility.disconnect(); trigger.current = () => {};
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      const geometries = new Set<THREE.BufferGeometry>();
      const resources = new Set<THREE.Material>();
      world.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Points) {
          geometries.add(object.geometry);
          for (const item of Array.isArray(object.material) ? object.material : [object.material]) resources.add(item);
        }
      });
      geometries.forEach(geometry => geometry.dispose()); resources.forEach(resource => resource.dispose());
      reactionTexture.dispose();
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    };
  }, []);

  return <div className="scene-wrap" data-ready={ready && !failed}>
    <div ref={host} className="scene-canvas" role="img" aria-label="Khu vườn 3D: nhà bí ngô, ếch xanh đội mũ phù thủy, dâu vàng và bạn ma. Dùng các nút bên dưới để tương tác." hidden={failed} />
    {!ready && !failed && <span className="sr-only" role="status">Đang mở khu vườn…</span>}
    {failed && <div className="scene-fallback"><Garden progress={0.4} /><span className="sr-only">Thiết bị chưa mở được 3D. Đồng hồ vẫn hoạt động.</span></div>}
  </div>;
}
