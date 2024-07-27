'use client'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Services', href: '/services' },
  { name: 'Resume', href: '/resume' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle>Menu</SheetTitle>
        <div className="mt-24 mb-20 text-center text-2xl">
          <Link href="/home">
            <h1 className="text-4xl font-semibold">
              <span className="border-b-2"> Ashish</span>
              <span className="text-primary"> .</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-7">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`${
                  link.href === pathName &&
                  'border-b-2 border-primary text-primary'
                } text-xl capitalize font-semibold transition-all hover:text-green-700`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
