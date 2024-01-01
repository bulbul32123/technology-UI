import React from 'react';
import HeroBg from '/images/Hero.png'
import Img from '../Img';
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';
import { slideInFromTop } from '../utils/motion';

export default function Hero() {
  return (
    <div className='h-screen relative w-full' id='/'>
      <Img src={HeroBg} alt="Hero Image" className='absolute select-none h-full w-full object-cover' />
        <div className="z-[3] flex justify-start xl:justify-around  items-center h-full w-full relative pl-7 md:pl-20 pr-7 md:pr-20">
        <div className="w-auto md:w-[600px] xl:mr-60">
          <motion.h1 variants={slideInFromTop(-100,0.7)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='text-white font-extrabold text-[25px] md:text-[35px] mb-3'>Journey Beyond Your Portal to the Infinite Cosmos.</motion.h1>
          <motion.p  variants={slideInFromTop(-100,0.9)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className='text-gray-300 font-light mb-3 text-[15px] md:text-[17px]'>Journey beyond the boundaries of Earth as we invite you to explore the mysteries of the universe through SPACE. Our celestial portal is your gateway to captivating astronomical wonders, cutting-edge discoveries, and a cosmic adventure that transcends the limits of imagination. Join us as we delve into the vastness of space, where every click opens a portal to a new frontier.</motion.p>
        <Link activeClass="active"
                    to="explore"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className='cursor-pointer'> <motion.button variants={slideInFromTop(-100,1)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='py-2 px-4  bg-white rounded-sm'>Explore</motion.button></Link>
        </div>
         
        </div>
    </div>
  )
}
