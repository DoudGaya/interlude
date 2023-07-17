import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { AuthContextProvider } from '@/utils/context/AuthContext'
import { Navigation } from './Navigation'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interlude HOME',
  description: 'Your productivity friend ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Create a productive work plan with break interval"
          />
          <meta
            property="og:description"
            content="Create a productive work plan with break interval."
          />

          <meta
            property="keywords"
            content="interlude, break, work, productivity, business"
          />

        </Head>

      <body className={inter.className+' dark:bg-gray-950 bg-gray-50'}>
            <Providers>
                <AuthContextProvider>
                      {children}
                </AuthContextProvider>
            </Providers> 
      </body>
    </html>
  )
}
