import { Comfortaa } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
