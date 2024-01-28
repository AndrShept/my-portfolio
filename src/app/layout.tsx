import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Spotlight } from '@/components/ui/Spotlight';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sheptyckiy Andriy Portfolio',
  description: 'portfolio cool dev :)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(`${inter.className}`)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster />
          <div className="flex h-[calc(100%-1000px)]  flex-col bg-dot-black/[0.07] dark:bg-dot-white/[0.07] ">
            {/* <BackgroundBeams /> */}
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60 "
              fill="white"
            />
            <Navbar />
            {children}
            {/* <Footer/> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
