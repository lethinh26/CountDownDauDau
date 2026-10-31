import type { ReactNode } from 'react';

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    moon: <path d="M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z" />,
    heart: <path d="M12 20S2 14 3 8c1-5 7-5 9-1 2-4 8-4 9 1 1 6-9 12-9 12Z" />,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export function Buddy() {
  return <svg viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="60" cy="109" rx="38" ry="6" fill="#544267" opacity=".1"/><ellipse cx="60" cy="82" rx="32" ry="25" fill="#9bad83"/><ellipse cx="60" cy="88" rx="21" ry="17" fill="#dce3b8"/><ellipse cx="60" cy="53" rx="40" ry="29" fill="#a9bc8e"/><circle cx="36" cy="33" r="16" fill="#a9bc8e"/><circle cx="84" cy="33" r="16" fill="#a9bc8e"/><circle cx="36" cy="34" r="7" fill="#fff8de"/><circle cx="84" cy="34" r="7" fill="#fff8de"/><circle cx="37" cy="35" r="3.5" fill="#46513e"/><circle cx="83" cy="35" r="3.5" fill="#46513e"/><ellipse cx="32" cy="58" rx="8" ry="4" fill="#dbb3a3"/><ellipse cx="88" cy="58" rx="8" ry="4" fill="#dbb3a3"/><path d="M48 59q12 12 24 0" fill="none" stroke="#46513e" strokeWidth="2.5" strokeLinecap="round"/><ellipse cx="32" cy="104" rx="14" ry="6" fill="#8b9f75"/><ellipse cx="88" cy="104" rx="14" ry="6" fill="#8b9f75"/></svg>;
}

export function Garden({ progress }: { progress: number }) {
  return <svg viewBox="0 0 600 230" className="garden-art" role="img" aria-label="Khu vườn có Ết ết và dâu dâu, lớn dần theo ngày về">
    <circle cx="475" cy="55" r="30" fill="#fae6ac"/><circle cx="486" cy="45" r="28" fill="#e9e2f0"/>
    {[70, 140, 240, 365, 410, 530].map((left, index) => <path key={left} d={`M${left} ${25 + index % 3 * 18}v8m-4-4h8`} stroke="#a695ba" strokeWidth="2" strokeLinecap="round"/>)}
    <ellipse cx="300" cy="205" rx="265" ry="23" fill="#b5bda1"/><path d="M35 205q70-85 170-30 100-90 210-5 90-35 150 35Z" fill="#cbd2b4"/>
    {Array.from({ length: 11 }, (_, index) => { const left = 60 + index * 48; const height = 15 + progress * (20 + index % 3 * 12); return <g key={left}><path d={`M${left} 207v-${height}m0 12q-18-16-19-3m19 7q17-18 19-6`} stroke="#81946e" strokeWidth="3" fill="none"/>{index / 12 <= progress && <g transform={`translate(${left} ${207 - height})`} fill={index % 2 ? '#e7b6ba' : '#f7dfa0'}><ellipse rx="7" ry="14"/><ellipse rx="14" ry="7"/><circle r="5" fill="#f7f1d6"/></g>}</g>; })}
    <g transform="translate(205 107) scale(.8)"><ellipse cx="60" cy="94" rx="35" ry="15" fill="#9bad83"/><ellipse cx="60" cy="58" rx="39" ry="31" fill="#a9bc8e"/><circle cx="36" cy="35" r="15" fill="#a9bc8e"/><circle cx="84" cy="35" r="15" fill="#a9bc8e"/><circle cx="37" cy="36" r="4" fill="#46513e"/><circle cx="83" cy="36" r="4" fill="#46513e"/><path d="M49 65q11 10 22 0" stroke="#46513e" strokeWidth="2" fill="none"/></g>
    <g transform="translate(302 133) scale(.65)"><path d="M22 42C16 0 104 0 98 42c-5 26-26 60-38 60S27 68 22 42Z" fill="#efc85e"/><path d="m60 20-25-15 23 4 9-20 5 21 25-3-22 16Z" fill="#8da57c"/><circle cx="45" cy="48" r="4" fill="#514853"/><circle cx="75" cy="48" r="4" fill="#514853"/><path d="M54 60q6 6 12 0" stroke="#514853" strokeWidth="2.5" fill="none"/></g>
  </svg>;
}
