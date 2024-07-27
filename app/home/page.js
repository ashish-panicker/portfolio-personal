'use client'

import Photo from '@/components/home/Photo'
import Social from '@/components/home/Social'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Stats from '@/components/home/Stats'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 rounded-lg">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="text-xl mb-6 ">
              <motion.div
                className="mb-8 "
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, duration: 0.2, ease: 'easeInOut' },
                }}
              >
                <p className="text-4xl xl:text-5xl xl:mb-2 ">Hello, </p>
                <p className="xl:text-7xl text-5xl xl:leading-relaxed mt-3">
                  <span className="xl:text-5xl">I&apos;m </span>
                  <span className="font-bold text-primary xl:inline block mt-3">
                    Ashish Sasidharan
                  </span>
                </p>
              </motion.div>
              <motion.div
                className="mb-8 "
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.1, duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <p className="max-w-[720px] xl:leading-loose leading-relaxed mb-8 text-[19px]">
                  Experienced{' '}
                  <span className="text-slate-950 bg-secondary dark:bg-gray-100 px-2 rounded capitalize font-semibold underline">
                    technical trainer
                  </span>{' '}
                  and{' '}
                  <span className="text-slate-950 bg-secondary dark:bg-gray-100 px-2 rounded capitalize font-semibold underline">
                    consultant
                  </span>
                  , skilled in engaging and educating diverse audiences, adept
                  at simplifying complex concepts with innovative teaching
                  methods, and organized collaborator with expertise in systems
                  support, user training, and a wide range of technologies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.5, ease: 'easeIn' },
                }}
                className="flex flex-col items-center gap-4 xl:flex-row"
              >
                <Button
                  // variant="ghost"
                  size="lg"
                  className="border uppercase font-semibold flex items-center justify-center gap-2"
                >
                  <span>Downlaod CV</span>
                  <FiDownload className="ml-2 text-2xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-10 h-10 border border-primary rounded-full flex items-center justify-center bg-primary-foreground/30 text-primary text-base hover:border-accent hover:bg-primary/70 hover:text-white hover:transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
