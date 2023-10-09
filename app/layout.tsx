import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/app/theme-prodiver';
import { switchThemeDuration } from '@/app/constants';

import { Header } from '@/app/components'
import { Footer } from '@/app/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MAP CA',
  description: 'MAP CA | Manish Kumar Sinha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-800 ${switchThemeDuration}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
