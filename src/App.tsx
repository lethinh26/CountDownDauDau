import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { countdown, skyTime, WEATHER_MAX_AGE } from './logic';
import { useWeather } from './useWeather';
import type { SceneAction } from './Scene';

const Scene = lazy(() => import('./Scene'));
const encouragements = [
  'Cố lên cố lên',
  'Nhớ ăn đủ bữa nhé',
  'Bụng có khó chịu ko, cố lên',
  'Còn mắc ói ko',
  'Nhớ uống nước nữa nhé',
  'Hôm nay học có mệt ko',
  'Tối tranh thủ ngủ sớm nhé',
  'Rảnh thì nhắn Ết ết nhé',
  'Sắp được về ròi, cố lên cố lên',
];

export default function App() {
  const [now, setNow] = useState(() => new Date());
  const [encouragement, setEncouragement] = useState(0);
  const [action, setAction] = useState<{ name: SceneAction; id: number } | null>(null);
  const { weather } = useWeather();
  useEffect(() => {
    const update = () => setNow(new Date());
    const timer = window.setInterval(update, 1000);
    document.addEventListener('visibilitychange', update);
    return () => { clearInterval(timer); document.removeEventListener('visibilitychange', update); };
  }, []);
  const interact = useCallback((name: SceneAction) => {
    setAction(previous => ({ name, id: (previous?.id ?? 0) + 1 }));
  }, []);
  const remaining = countdown(now);
  const sky = skyTime(now);
  const currentWeather = weather && now.getTime() - weather.time <= WEATHER_MAX_AGE ? weather : null;
  const raining = currentWeather?.raining ?? false;
  return <main className={`home ${sky.phase} ${raining ? 'rainy' : ''}`} data-phase={sky.phase} data-rain={raining} aria-label="Ngày về của dâu dâu">
    <div className="world-card">
      <Suspense fallback={<div className="scene-loading-placeholder" role="status" aria-label="Đang mở khu vườn" />}>
        <Scene now={now} weather={currentWeather} action={action} onInteract={interact} />
      </Suspense>
      <div className="accessible-controls" role="group" aria-label="Tương tác với khu vườn">
        {([['frog', 'Ết ết'], ['berry', 'dâu dâu'], ['house', 'Đèn nhà'], ['ghost', 'Bạn ma'], ['sky', 'Gửi điều ước']] as const).map(([name, label]) => <button className="sr-only" key={name} onClick={() => interact(name)}>{label}</button>)}
      </div>
      <div className="countdown-card">
        <div className="countdown-grid" role="timer" aria-label={remaining.arrived ? 'Đã đến ngày về' : 'Thời gian còn lại đến ngày về'} aria-live="off">
          {([['days', 'ngày'], ['hours', 'giờ'], ['minutes', 'phút'], ['seconds', 'giây']] as const).map(([unit, label]) => <div className={`time-unit ${unit}`} key={unit}><span className="time-value" data-unit={unit}>{String(remaining[unit]).padStart(2, '0')}</span><span className="unit-label">{label}</span></div>)}
        </div>
        <time className="return-date" dateTime="2026-11-20T00:00:00+07:00" aria-label="Ngày về: 00 giờ ngày 20 tháng 11 năm 2026, giờ Việt Nam">20.11.2026</time>
        <button className="encouragement-button" aria-describedby="encouragement-hint" onClick={() => setEncouragement(index => (index + 1) % encouragements.length)}>
          <span aria-live="polite"><span className="message-text" key={encouragement}>{encouragements[encouragement]}</span></span><span className="message-next" aria-hidden="true">↻</span>
        </button>
        <span id="encouragement-hint" className="sr-only">Chạm để đọc câu cổ vũ tiếp theo.</span>
      </div>
      <a className="sr-only" href="https://open-meteo.com/" target="_blank" rel="noreferrer">Dữ liệu thời tiết: Open-Meteo</a>
    </div>
  </main>;
}
