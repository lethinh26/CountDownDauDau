import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countdown, lickReaction, lickReach, parseWeather, skyTime } from '../src/logic.ts';

test('frog jolts once on contact while its reaction rises and fades', () => {
  for (const elapsed of [-1, 1.2, 100]) assert.deepEqual(lickReaction(elapsed), { jolt: 0, rise: 0, opacity: 0 });
  assert.equal(lickReaction(0).opacity, 1);
  assert.equal(lickReaction(0.15).jolt, 1);
  assert.equal(lickReaction(0.3).jolt, 0);
  assert.equal(lickReaction(0.9).jolt, 0);
  assert.ok(lickReaction(0.9).rise > lickReaction(0.3).rise);
  assert.ok(Math.abs(lickReaction(0.9).opacity - 0.5) < 1e-10);
  assert.ok(lickReach(0.54) < 1);
  assert.equal(lickReach(0.55), 1);
});

test('tongue extends, holds cheek contact, retracts and restarts from rest', () => {
  for (const elapsed of [-1, 0, 1.6, 100]) assert.equal(lickReach(elapsed), 0);
  assert.equal(lickReach(0.275), 0.5);
  for (const elapsed of [0.55, 0.7, 0.9]) assert.equal(lickReach(elapsed), 1);
  assert.ok(Math.abs(lickReach(1.25) - 0.5) < 1e-10);
  for (let step = 0; step <= 160; step++) {
    const reach = lickReach(step / 100);
    assert.ok(reach >= 0 && reach <= 1);
  }
  assert.equal(lickReach(0), 0);
});

test('countdown is second-accurate in Vietnam time and clamps at arrival', () => {
  assert.deepEqual(countdown(new Date('2026-10-26T00:00:00+07:00')), { days: 25, hours: 0, minutes: 0, seconds: 0, elapsed: 0, total: 25, progress: 0, arrived: false });
  const noon = countdown(new Date('2026-10-31T05:00:00Z'));
  assert.deepEqual([noon.days, noon.hours, noon.minutes, noon.seconds], [19, 12, 0, 0]);
  const beforeMidnight = countdown(new Date('2026-10-31T16:59:59Z'));
  assert.deepEqual([beforeMidnight.days, beforeMidnight.hours, beforeMidnight.minutes, beforeMidnight.seconds], [19, 0, 0, 1]);
  assert.equal(countdown(new Date('2026-10-01T00:00:00+07:00')).progress, 0);
  assert.equal(countdown(new Date('2026-11-19T23:59:59.999+07:00')).seconds, 1);
  for (const date of ['2026-11-20T00:00:00+07:00', '2027-01-01T00:00:00Z']) {
    assert.deepEqual(countdown(new Date(date)), { days: 0, hours: 0, minutes: 0, seconds: 0, elapsed: 25, total: 25, progress: 1, arrived: true });
  }
});

test('sky follows Vietnam time regardless of device timezone', () => {
  for (const [hour, phase] of [[0, 'night'], [5, 'night'], [8, 'morning'], [12, 'noon'], [16, 'evening'], [19, 'night']] as const) {
    assert.equal(skyTime(new Date(`2026-10-31T${String(hour).padStart(2, '0')}:00:00+07:00`)).phase, phase);
  }
  assert.equal(skyTime(new Date('2026-10-31T05:00:00Z')).daylight, 1);
  assert.equal(skyTime(new Date('2026-10-31T17:00:00Z')).daylight, 0);
});

test('weather validates untrusted API data and recognizes rain', () => {
  const current = { temperature_2m: 27.5, precipitation: 0, weather_code: 2, cloud_cover: 40, time: 1793426400 };
  assert.equal(parseWeather({ current }).raining, false);
  assert.equal(parseWeather({ current }).time, current.time * 1000);
  for (const code of [51, 61, 65, 80, 95, 99]) assert.equal(parseWeather({ current: { ...current, weather_code: code } }).raining, true);
  assert.equal(parseWeather({ current: { ...current, precipitation: 0.2 } }).raining, true);
  for (const payload of [null, {}, { current: {} }, { current: { ...current, temperature_2m: '27' } }, { current: { ...current, precipitation: -1 } }, { current: { ...current, cloud_cover: 101 } }, { current: { ...current, time: NaN } }, { current: { ...current, weather_code: 500 } }]) assert.throws(() => parseWeather(payload));
});
