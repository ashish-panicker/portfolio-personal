'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Services', href: '/services' },
  { name: 'Resume', href: '/resume' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

const Nav = () => {
  const pathName = usePathname()
  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={`${
              link.href === pathName && 'border-b-2 border-primary text-primary'
            } capitalize text-[19px] font-semibold transition-all hover:text-secondary-foreground/70`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
