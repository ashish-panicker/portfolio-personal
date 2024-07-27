'use client'
import { AnimatePresence, delay, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'

const StairTransition = () => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex"
      >
        <Stairs />
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
