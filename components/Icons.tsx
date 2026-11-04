const paths: Record<string, string> = {
  brain: 'M9 3a3 3 0 0 0-5.8 1A3.5 3.5 0 0 0 2 10a3.5 3.5 0 0 0 2 6.5A3 3 0 0 0 9 19V3Zm6 0a3 3 0 0 1 5.8 1A3.5 3.5 0 0 1 22 10a3.5 3.5 0 0 1-2 6.5A3 3 0 0 1 15 19V3ZM9 8H6m3 5H5m10-5h3m-3 5h4',
  network: 'M12 12 5 5m7 7 7-7m-7 7-7 7m7-7 7 7M5 5h.01M19 5h.01M5 19h.01M19 19h.01M12 12h.01',
  search: 'M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm5.5-2 5 5M8 10h5m-2.5-2.5v5',
  shield: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-4-10 3 3 5-6',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14',
  lock: 'M5 10h14v11H5zM8 10V7a4 4 0 0 1 8 0v3m-4 5v2',
  chart: 'M4 20V11h4v9m4 0V4h4v16m4 0V8h4v12M2 20h22',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm0 0V22',
  users: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7a4 4 0 0 1 0 8m3 4a4 4 0 0 1 2 3v2',
  cap: 'M2 9 12 4l10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v7',
  briefcase: 'M3 7h18v14H3zM8 7V4h8v3M3 12h18m-11 0v2h4v-2',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  file: 'M6 2h9l5 5v15H6zM14 2v6h6M9 13h8m-8 4h8',
  check: 'm5 12 4 4L19 6',
};
export default function Icon({ name, className = '' }: { name: keyof typeof paths; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.brain}/></svg>;
}
