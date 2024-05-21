import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar } from './ui/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vancouver Vent Cleaning',
  description: 'Get your kitchen hood certified and safe from grease fires',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <div className='min-h-[90vh] rounded shadow-lg flex-grow md:p-20'>
          {children}
        </div>
      </body>
    </html>
  );
}
