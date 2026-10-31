import assert from 'node:assert/strict';
import { chromium, expect } from '@playwright/test';

const browser = await chromium.launch();
const baseURL = process.env.TEST_URL || 'http://127.0.0.1:4173';
const errors = [];
const start = new Date('2026-10-31T08:00:00+07:00');
let current = { temperature_2m: 27, precipitation: 0, weather_code: 2, cloud_cover: 40, time: start.getTime() / 1000 };
let fail = false;
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, timezoneId: 'America/New_York' });
  page.on('pageerror', error => errors.push(error.message));
  await page.clock.install({ time: start });
  await page.clock.pauseAt(start);
  await page.route('https://api.open-meteo.com/**', route => fail ? route.abort() : route.fulfill({ json: { current } }));
  await page.goto(baseURL);
  await expect.poll(async () => {
    await page.clock.runFor(100);
    return page.locator('.scene-wrap').getAttribute('data-ready', { timeout: 100 }).catch(() => null);
  }).toBe('true');
  assert.equal(await page.locator('canvas').evaluate(element => getComputedStyle(element).webkitTapHighlightColor), 'rgba(0, 0, 0, 0)', 'No native blue tap highlight on the 3D scene');
  await page.clock.setSystemTime(start);
  await page.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
  await expect(page.locator('.time-value')).toHaveText(['19', '16', '00', '00']);
  await page.clock.runFor(2100);
  await expect(page.locator('[data-unit="seconds"]')).toHaveText(/58|59/);
  const seconds = Number(await page.locator('[data-unit="seconds"]').innerText());
  await page.clock.runFor(1000);
  await expect(page.locator('[data-unit="seconds"]')).toHaveText(String(seconds - 1));
  assert.equal(await page.locator('header, footer, h1, .weather-panel, .encouragement, .scene-caption, .interaction-area, audio, nav, dialog').count(), 0);
  const visibleCopy = await page.locator('main').evaluate(element => {
    const clone = element.cloneNode(true);
    clone.querySelectorAll('.sr-only, canvas, .encouragement-button').forEach(node => node.remove());
    return clone.textContent.replace(/\s/g, '');
  });
  assert.match(visibleCopy, /^\d{2}ngày\d{2}giờ\d{2}phút\d{2}giây20\.11\.2026$/);
  const encouragement = page.locator('.encouragement-button');
  const message = encouragement.locator('.message-text');
  const firstMessage = await message.innerText();
  const seen = new Set([firstMessage]);
  assert.ok((await encouragement.boundingBox()).height >= 44);
  for (let index = 0; index < 7; index++) {
    await encouragement.tap();
    await page.clock.runFor(300);
    const nextMessage = await message.innerText();
    assert.ok(!seen.has(nextMessage), 'New encouragement on each tap');
    seen.add(nextMessage);
  }
  await encouragement.tap();
  await expect(message).toHaveText(firstMessage);
  await encouragement.focus();
  await page.keyboard.press('Enter');
  await expect(message).not.toHaveText(firstMessage);
  await encouragement.evaluate(element => element.blur());
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.clock.runFor(2000);
  const before = await page.locator('canvas').screenshot();
  const lamp = page.getByRole('button', { name: 'Đèn nhà', exact: true });
  assert.equal((await lamp.boundingBox()).width, 1);
  await lamp.focus();
  assert.ok((await lamp.boundingBox()).height >= 44);
  await page.keyboard.press('Enter');
  await lamp.evaluate(element => element.blur());
  await page.clock.runFor(400);
  assert.notDeepEqual(await page.locator('canvas').screenshot(), before, 'Keyboard interaction changes scene lighting');
  const berry = page.getByRole('button', { name: 'dâu dâu', exact: true });
  await berry.focus();
  await page.keyboard.press('Enter');
  await berry.evaluate(element => element.blur());
  await page.clock.runFor(200);
  const tongueExtended = await page.locator('canvas').screenshot();
  await page.clock.runFor(1200);
  assert.notDeepEqual(await page.locator('canvas').screenshot(), tongueExtended, 'Berry tongue retracts after contact');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.locator('canvas').tap({ position: { x: 15, y: 15 } });
  await page.clock.runFor(300);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 844 });
    await page.clock.runFor(100);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No overflow at ${width}px`);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [hour, phase] of [[12, 'noon'], [16, 'evening'], [21, 'night']]) {
    const time = new Date(`2026-10-31T${hour}:00:00+07:00`);
    current.time = time.getTime() / 1000;
    await page.clock.setSystemTime(time);
    await page.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
    await expect(page.locator('main')).toHaveAttribute('data-phase', phase);
  }
  await page.clock.runFor(1500);
  await page.screenshot({ path: 'tests/night-mobile.png', fullPage: true });
  current = { ...current, precipitation: 2, weather_code: 63, cloud_cover: 100 };
  await page.clock.fastForward(15 * 60_000);
  await expect(page.locator('main')).toHaveAttribute('data-rain', 'true');
  await page.clock.runFor(500);
  await page.screenshot({ path: 'tests/rain-mobile.png', fullPage: true });
  fail = true;
  await page.clock.fastForward(61 * 60_000);
  await expect(page.locator('main')).toHaveAttribute('data-rain', 'false');
  await page.clock.setSystemTime(new Date('2026-11-20T00:00:00+07:00'));
  await page.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
  await expect(page.getByRole('timer')).toHaveAttribute('aria-label', 'Đã đến ngày về');
  await expect(page.locator('.time-value')).toHaveText(['00', '00', '00', '00']);
  await page.locator('canvas').evaluate(canvas => canvas.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
  await expect(page.locator('.scene-fallback')).toBeVisible();
  await expect(page.locator('.time-value')).toHaveCount(4);
  assert.deepEqual(errors, []);
  console.log('PASS: minimal visible copy, seconds, arrival, keyboard and touch interactions, responsive widths, sky, background rain, stale weather, WebGL fallback.');
} finally { await browser.close(); }
