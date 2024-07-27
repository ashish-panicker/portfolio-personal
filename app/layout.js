import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import PageTransition from '@/components/shared/PageTransition'
import StairTransition from '@/components/shared/StairTransition'

const font = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ashish S Panicker',
  description: 'My Profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="`${font.className}` dark">
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
