import React from 'react';
import ExploreBg from '/images/about.png'
import Img from '../Img';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
import { slideInFromTop } from '../utils/motion';

export default function Explore() {
  return (
    <div className='h-screen relative w-full' id='explore'>
    <Img src={ExploreBg} alt="Explore Image" className='absolute select-none h-full w-full object-cover' />
      <div className="z-[3] flex justify-start xl:justify-around  items-center h-full w-full relative pl-7 md:pl-20 pr-7 md:pr-20">
      <div className="w-auto md:w-[600px] xl:mr-60">
        <motion.h1 variants={slideInFromTop(100,0.2)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className='text-white font-extrabold text-[25px] md:text-[35px] mb-3 mt-28 sm:mt-0'>Exploring the Cosmos: Unraveling the Wonders of Space. <span className='text-green-500'>Connect with a Global Community</span></motion.h1>
        <motion.p variants={slideInFromTop(100,0.4)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className='text-gray-300 font-light mb-3 text-[15px] md:text-[17px]'>Join a community of space enthusiasts from around the globe. Engage in discussions, share your thoughts, and connect with like-minded individuals who share a fascination for the cosmos. SPACE is more than a platform; it's a thriving space community ready to inspire and spark conversations about the universe we call home.</motion.p>
        <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className='cursor-pointer'> <motion.button variants={slideInFromTop(100,0.5)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='py-2 px-4  bg-white rounded-sm'>Contact</motion.button></Link>
      </div>
       
      </div>
  </div>
  )
}
