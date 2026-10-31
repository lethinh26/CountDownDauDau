export const RETURN = Date.parse('2026-11-20T00:00:00+07:00');
const DEPARTURE = Date.parse('2026-10-26T00:00:00+07:00');
export const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?latitude=10.9574&longitude=106.8426&current=temperature_2m,precipitation,weather_code,cloud_cover&timezone=Asia%2FHo_Chi_Minh&timeformat=unixtime&forecast_days=1';
export const WEATHER_MAX_AGE = 60 * 60_000;

export function countdown(now = new Date()) {
  const secondsLeft = Math.max(0, Math.ceil((RETURN - now.getTime()) / 1000));
  const progress = Math.max(0, Math.min(1, (now.getTime() - DEPARTURE) / (RETURN - DEPARTURE)));
  return {
    days: Math.floor(secondsLeft / 86400), hours: Math.floor(secondsLeft % 86400 / 3600),
    minutes: Math.floor(secondsLeft % 3600 / 60), seconds: secondsLeft % 60,
    elapsed: Math.floor(progress * 25), total: 25, progress, arrived: secondsLeft === 0,
  };
}

export function lickReach(elapsed: number) {
  if (elapsed < 0 || elapsed >= 1.6) return 0;
  const progress = Math.min(1, elapsed / 0.55, (1.6 - elapsed) / 0.7);
  return progress * progress * (3 - 2 * progress);
}

export function lickReaction(elapsed: number) {
  if (elapsed < 0 || elapsed >= 1.2) return { jolt: 0, rise: 0, opacity: 0 };
  return {
    jolt: elapsed < 0.3 ? Math.sin(elapsed / 0.3 * Math.PI) : 0,
    rise: elapsed * 0.8,
    opacity: Math.min(1, (1.2 - elapsed) / 0.6),
  };
}

export function skyTime(now = new Date()) {
  const local = new Date(now.getTime() + 7 * 3600_000);
  const hour = local.getUTCHours() + local.getUTCMinutes() / 60 + local.getUTCSeconds() / 3600;
  const daylight = Math.max(0, Math.sin((hour - 6) / 12 * Math.PI));
  const phase = hour < 5.5 || hour >= 18.5 ? 'night' : hour < 10 ? 'morning' : hour < 15 ? 'noon' : 'evening';
  return { hour, daylight, phase, label: { night: 'Đêm dịu dàng', morning: 'Buổi sáng trong veo', noon: 'Trưa nắng vàng', evening: 'Chiều thật êm' }[phase] };
}

export type Weather = { temperature: number; precipitation: number; code: number; clouds: number; time: number; raining: boolean; label: string };
const codes = new Set([0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);

export function parseWeather(payload: unknown): Weather {
  const current = (payload as { current?: Record<string, unknown> } | null)?.current;
  if (!current) throw new Error('Thiếu dữ liệu thời tiết');
  const { temperature_2m: temperature, precipitation, weather_code: code, cloud_cover: clouds, time } = current;
  if (![temperature, precipitation, code, clouds, time].every(value => typeof value === 'number' && Number.isFinite(value))) throw new Error('Dữ liệu thời tiết không hợp lệ');
  const values = { temperature: temperature as number, precipitation: precipitation as number, code: code as number, clouds: clouds as number, time: (time as number) * 1000 };
  if (values.temperature < -90 || values.temperature > 60 || values.precipitation < 0 || values.precipitation > 1000 || values.clouds < 0 || values.clouds > 100 || values.time <= 0 || !codes.has(values.code)) throw new Error('Dữ liệu thời tiết ngoài phạm vi');
  const raining = values.precipitation > 0 || (values.code >= 51 && values.code <= 67) || [80, 81, 82, 95, 96, 99].includes(values.code);
  return { ...values, raining, label: values.code >= 95 ? 'Mưa dông' : raining ? 'Trời đang mưa' : values.code >= 71 && values.code <= 86 ? 'Có tuyết' : [45, 48].includes(values.code) ? 'Sương mù' : values.clouds > 65 || values.code === 3 ? 'Nhiều mây' : values.clouds > 20 ? 'Mây nhẹ' : 'Trời quang' };
}
