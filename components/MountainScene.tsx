export default function MountainScene({ className = '' }: { className?: string }) {
  return (
    <svg className={`mountain-scene ${className}`} viewBox="0 0 1440 430" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dff8ff"/><stop offset="1" stopColor="#9bdcf5"/></linearGradient>
        <linearGradient id="far" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b7e9ff"/><stop offset="1" stopColor="#4b9bc9"/></linearGradient>
        <linearGradient id="near" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#176b9a"/><stop offset="1" stopColor="#062e4b"/></linearGradient>
      </defs>
      <rect width="1440" height="430" fill="url(#sky)"/>
      <path d="M0 230 130 92 205 158 310 45 430 180 540 80 670 202 790 66 920 190 1050 55 1170 175 1285 70 1440 220V430H0Z" fill="url(#far)" opacity=".9"/>
      <path d="m0 238 130-146 75 66 105-113 120 135 110-100 130 122 120-136 130 124 130-135 120 120 115-105 155 150v210H0Z" fill="#d7f2ff" opacity=".65"/>
      <path d="M0 290 160 170 270 260 420 130 560 278 700 165 850 285 1000 145 1140 280 1290 160 1440 285V430H0Z" fill="#4c9bc5" opacity=".78"/>
      <path d="M0 330 160 245 280 325 430 210 580 330 730 220 880 335 1030 220 1180 330 1320 230 1440 320V430H0Z" fill="url(#near)"/>
      <g fill="#052d49">
        {Array.from({length:34},(_,i)=>{const x=i*45-10;const h=80+(i*37%105);return <path key={i} d={`M${x} 430 L${x+22} ${430-h} L${x+44} 430Z M${x+7} 430 L${x+22} ${430-h*.72} L${x+37} 430Z`}/>})}
        {Array.from({length:32},(_,i)=>{const x=1440-i*45-20;const h=75+(i*29%115);return <path key={`r${i}`} d={`M${x} 430 L${x+22} ${430-h} L${x+44} 430Z M${x+7} 430 L${x+22} ${430-h*.7} L${x+37} 430Z`}/>})}
      </g>
    </svg>
  );
}
