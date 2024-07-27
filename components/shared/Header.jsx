import MobileNav from './MobileNav'
import Nav from './Nav'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="py-8 xl:py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home">
          <h1 className="text-4xl font-semibold">
            <span> Ashish S</span>
          </h1>
          <h3 className="text-[18px] font-semibold">
            Technical Trainer & Consultant
          </h3>
        </Link>

        {/* main nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-[17px] font-semibold" size="lg">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
