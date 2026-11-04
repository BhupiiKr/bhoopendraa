import type { ReactNode } from 'react';
import MountainScene from './MountainScene';
export default function PageShell({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
 return <><main className="page-main"><div className="page-heading"><div>{eyebrow && <p className="script-label">{eyebrow}</p>}<h1>{title}</h1></div>{subtitle && <p className="heading-subtitle">{subtitle}</p>}</div>{children}</main><div className="landscape-footer"><MountainScene /></div></>;
}
