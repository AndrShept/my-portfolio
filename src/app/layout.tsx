import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang='en' >
      <body className={`${inter.className}`} >
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Toaster/>
          <div className='flex min-h-screen flex-col '>
            <Navbar />
            {children}
            {/* <Footer/> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
