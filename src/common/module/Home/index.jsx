import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Feature from '../Feature/Feature'
import Banner from '../Banner/Banner'
import About from '../About'

const Homepage = () => {
  return (
    <div className='w-full overflow-hidden flex justify-center flex-col items-center'>
      <Hero />
      <Feature />
      <Service />
      <About />
      <Banner />
    </div>
  )
}

export default Homepage
