import { useCallback, useEffect, useRef, useState } from 'react';
import { parseWeather, WEATHER_MAX_AGE, WEATHER_URL, type Weather } from './logic';

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const controller = useRef<AbortController | null>(null);
  const lastAttempt = useRef(0);
  const refresh = useCallback(async () => {
    controller.current?.abort();
    const request = new AbortController();
    controller.current = request;
    lastAttempt.current = Date.now();
    setLoading(true);
    const timeout = window.setTimeout(() => request.abort(), 10_000);
    try {
      const response = await fetch(WEATHER_URL, { signal: request.signal });
      if (!response.ok) throw new Error('Không kết nối được');
      const next = parseWeather(await response.json());
      if (Date.now() - next.time > WEATHER_MAX_AGE || next.time > Date.now() + 5 * 60_000) throw new Error('Dữ liệu chưa cập nhật');
      if (controller.current === request) { setWeather(next); setError(false); }
    } catch {
      if (controller.current === request) setError(true);
    } finally {
      clearTimeout(timeout);
      if (controller.current === request) { setLoading(false); controller.current = null; }
    }
  }, []);
  useEffect(() => {
    void refresh();
    const resume = () => { if (!document.hidden && Date.now() - lastAttempt.current >= 60_000) void refresh(); };
    const timer = window.setInterval(() => { if (!document.hidden) void refresh(); }, 15 * 60_000);
    window.addEventListener('online', resume);
    document.addEventListener('visibilitychange', resume);
    return () => {
      clearInterval(timer);
      controller.current?.abort();
      controller.current = null;
      window.removeEventListener('online', resume);
      document.removeEventListener('visibilitychange', resume);
    };
  }, [refresh]);
  return { weather, loading, error, refresh };
}
