import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import Solution from '../Solution'
import Blog from '../Blog'
import Feedback from '../Feedback'
import Feature from '../Feature/Feature'
import Pricing from '../Pricing/Pricing'
import Banner from '../Banner/Banner'

const Homepage = () => {
  return (
    <div className='w-full overflow-hidden flex justify-center flex-col items-center'>
      <Hero />
      <Feature />
      <Service />
      {/* <Solution /> */}
      {/* <Pricing/> */}
      {/* <Blog/> */}
      {/* <Feedback/> */}
      <Banner />
    </div>
  )
}

export default Homepage
