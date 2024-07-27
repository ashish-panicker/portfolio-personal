'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none "
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 2, ease: 'easeInOut' },
          }}
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
