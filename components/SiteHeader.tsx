import Link from 'next/link';
const links = [['Home','/'],['About','/about'],['Research','/research'],['Projects','/projects'],['Skills','/skills'],['Teaching','/teaching'],['Publications','/publications'],['CV','/cv'],['Contact','/contact']];
export default function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="Bhoopendra Kumar home"><span className="brand-mark">BK</span><span className="brand-name">Bhoopendra Kumar</span></Link><nav className="main-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></header>;
}
