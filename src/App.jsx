import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Languages, Hero, Navbar, Tech, StarsCanvas, Interests} from './components'

const App = () =>{
  return (
    
   <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Interests/>
      <Languages />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
