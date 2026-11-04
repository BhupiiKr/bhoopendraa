import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';
export const metadata: Metadata = { title: 'Bhoopendra Kumar | Academic Portfolio', description: 'Academic portfolio of Bhoopendra Kumar, Assistant Professor in Computer Science and Applied Mathematics.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body><div className="site-frame"><SiteHeader />{children}<footer className="site-footer"><span>© {new Date().getFullYear()} Bhoopendra Kumar</span><span>Computer Science · Applied Mathematics · Intelligent Computing</span></footer></div></body></html>;
}
