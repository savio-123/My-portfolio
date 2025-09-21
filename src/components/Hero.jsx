import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputerCanvas } from './canvas'

// Simple fade/slide animation
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2
    }
  }
}

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        {/* Modern shape element */}
        {/* Modern shape element */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", duration: 1, delay: 0.1 }}
  className='flex flex-col items-center justify-center mt-5 space-y-2'
>
  {/* Floating triangle */}
  <motion.div
    className='w-6 h-6 rotate-45 bg-gradient-to-b from-cyan-400 to-blue-500 clip-triangle'
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
  />

  {/* Fading circles */}
  <motion.div
    className='w-2 h-2 rounded-full bg-gradient-to-b from-pink-400 to-orange-400'
    animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
  />
  <motion.div
    className='w-2 h-2 rounded-full bg-gradient-to-b from-pink-400 to-orange-400'
    animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.2, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
  />
</motion.div>

        {/* Animated Text */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="show"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-cyan-400'>Savio</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Turning ideas into<br className='hidden sm:block' /> code and visuals
          </p>
        </motion.div>
      </div>

      <ComputerCanvas />

      {/* Scroll indicator */}
      <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
