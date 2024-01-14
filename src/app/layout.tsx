import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darkx Portfolio',
  description: 'Developed by Roshan, using HTML, TailwindCSS , Typescript, NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
