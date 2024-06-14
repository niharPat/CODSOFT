"use client"
import { useEffect } from 'react';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // No need to call the font loader function here
  }, []);
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};


export default Layout;
