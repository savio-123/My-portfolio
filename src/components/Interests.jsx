  import React from 'react'
  import {github} from '../assets'
  import { SectionWrapper } from '../hoc'
  import { textVariant, fadeIn } from '../utils/motion'
  import { interests } from '../constants'
  import { motion } from 'framer-motion'
  import { styles } from '../styles'
import { Tilt } from 'react-tilt'

  const InterestCard = ({index, interest,title,description,icon}) => {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
      <Tilt
       options={{
        max: 45, 
        scale: 1, 
        speed: 450}}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[410px]'>
        <div className='relative w-full h-[230px]'>
          <img src={icon} alt={title} className='object-cover w-full h-full rounded-2xl'/>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
            </Tilt>
      </motion.div>
    )
  }
  const Interests = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What I like</p>
          <h2 className={`${styles.sectionHeadText}`}>My Interests</h2>
        </motion.div>

        <div className='flex flex-col w-full pb-10 mt-5'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            These are some of the things I enjoy and love spending time on:
          </motion.p>
        </div>
        <div className='flex flex-wrap gap-10'>
          {interests.map((interest,index) => (
          <InterestCard key={`interest-${index}`} index={index} {...interest}/>
          ))}
        </div>
      </>
    )
  }

  export default SectionWrapper(Interests, "interests")