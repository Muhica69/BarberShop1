import React from 'react'
import Navbar from '../components/navbar'
import About from '../components/about'
import Contact from '../components/contact'
import Info from '../components/info'
import Tim from '../components/tim'

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 items-center justify-center flex flex-col">
        <Navbar />
        <About />
        <div className="mb-20 ">
          <Info />
        </div>
        <div className="mb-20">

        <Tim />
        </div>
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
