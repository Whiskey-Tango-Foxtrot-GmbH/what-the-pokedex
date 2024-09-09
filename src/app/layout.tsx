import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'

import logoImg from '../images/logo.png'

import './globals.css'

import Link from 'next/link'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'WHAT THE POKÉDEX',
  description: 'Whiskey Tango Foxtrot Next.js Coding Challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid min-h-screen grid-rows-[160px_1fr_40px] items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
          <header className="h-40 w-full bg-red-500">
            <div className="flex items-center justify-center p-4">
              <Link href="/">
                <Image
                  src={logoImg}
                  alt="what the pokedex logo"
                  height={80}
                  className="object-fill"
                  priority
                />
              </Link>
            </div>
          </header>
          <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
            {children}
          </main>
          <footer className="row-start-3 flex size-full flex-wrap items-center justify-center gap-6 bg-red-500 text-yellow-300">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}
