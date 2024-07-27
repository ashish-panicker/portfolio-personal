import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: 'easeInOut' },
          }}
          className="w-[300px] h-[300px] xl:h-[420px] xl:w-[420px] "
        >
          <Image
            src="/file4.png"
            className="object-cover rounded-full"
            fill
            priority
            alt="Profile Picture"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
