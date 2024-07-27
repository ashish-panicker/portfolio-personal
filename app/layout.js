import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import PageTransition from '@/components/shared/PageTransition'
import StairTransition from '@/components/shared/StairTransition'

const font = Roboto_Mono({
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
        <footer className="p-2 text-center bg-primary/10 fixed right-0 bottom-0">
          <p className="text-sm">Ashish S</p>
        </footer>
      </body>
    </html>
  )
}
