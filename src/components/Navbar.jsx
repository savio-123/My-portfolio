import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { motion } from 'framer-motion'

// Variants for staggered animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each child
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.6 } },
}

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Savio&nbsp;
            <span className="hidden sm:block">| Rajan</span>
          </p>
        </Link>

        {/* Desktop Menu (with animation) */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-row hidden gap-10 list-none sm:flex"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              variants={item}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium cursor-pointer text-[18px]`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            aria-label="Toggle menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start w-full gap-4 list-none"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  variants={item}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(false) // ✅ closes menu after click
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

