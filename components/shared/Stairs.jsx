import { motion } from 'framer-motion'

const stairAnimation = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: ['100%', '0%'] },
}
const total = 6
const reverseIndex = (index) => {
  return total - index - 1
}

const Stairs = () => {
  console.log('stairs')
  return (
    <>
      {[...Array(total)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className="h-full w-full relative bg-primary"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: reverseIndex(index) * 0.1,
            }}
          />
        )
      })}
    </>
  )
}

export default Stairs
