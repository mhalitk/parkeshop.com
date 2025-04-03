import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ParkeShop - Parke ve Zemin Kaplama Uzmanı',
  description: 'Parke ve zemin kaplama çözümleri için profesyonel hizmet. En kaliteli parke çeşitleri ve uzman montaj hizmeti.',
  keywords: 'parke, zemin kaplama, laminat parke, masif parke, lamine parke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen bg-white flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  )
} 