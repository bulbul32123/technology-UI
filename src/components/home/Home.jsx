import React from 'react'
import Nabvar from '../Navbar/Nabvar'
import Hero from './Hero'
import Explore from '../explore/Explore'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import About from '../about/About'

export default function Home() {
  return (
    <div>
      <Nabvar />
      <Hero />
      <Explore />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
