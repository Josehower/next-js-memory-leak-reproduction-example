import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/page2">page 2</Link>
          <Link href="/page3">page 3</Link>
          <Link href="/page4">page 4</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
