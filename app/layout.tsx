import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interlude HOME',
  description: 'Your productivity friend ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+ ' dark:bg-gray-950 bg-gray-50'} >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
