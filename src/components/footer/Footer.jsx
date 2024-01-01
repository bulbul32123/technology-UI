import React from 'react';
import logo from '/images/Logo.png';
import Img from '../Img';
import  { motion } from 'framer-motion'
import { BsGithub , BsLinkedin, BsFacebook} from 'react-icons/bs'
import { slideInFromTop } from '../utils/motion';


export default function Footer() {
  return (
    <motion.div variants={slideInFromTop(100,0.7)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='flex justify-around items-center h-20 w-full bg-gray-300'>
    <div className="">
    <Img src={logo} alt="Logo" className='h-20 select-none' />
    </div>    
    <div className="">
      <h4>More Info:</h4>
      <div className="flex gap-3">
      <BsGithub size={15}     className='cursor-pointer' />
      <BsFacebook size={15}   className='cursor-pointer' />
      <BsLinkedin  size={15}  className='cursor-pointer'  />
      </div>
    </div>
    </motion.div>
  )
}
