import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Intermediate" },
    { name: "Malayalam", level: "Native" },
  ]

  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>I speak</p>
        <h2 className={`${styles.sectionHeadText}`}>Languages I Know</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here are the languages I can communicate in along with my proficiency:
      </motion.p>

      {/* Languages Cards */}
      <motion.div
        className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {languages.map((lang, index) => (
          <motion.div
  key={lang.name}
  variants={fadeIn("up", "spring", 0.1 * index, 0.6)}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="flex flex-col items-center justify-center p-4 text-white shadow-lg cursor-pointer rounded-xl bg-gradient-to-r from-violet-800/50 to-black/30"
>
  <h3 className="text-lg font-semibold">{lang.name}</h3>
  <p className="mt-1 text-sm">{lang.level}</p>
</motion.div>



        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Languages, "languages")
