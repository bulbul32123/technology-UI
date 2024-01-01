import React from 'react';
import AboutImage from '/images/group.jpg'
import Img from '../Img';
import { motion } from 'framer-motion';
import Container from '../Container';
import { opacity, slideInFromTop } from '../utils/motion';

export default function About() {
  return (
    <Container>
    <div id='about' className='h-full w-full flex justify-around items-center flex-col'>
     <div className="md:w-[800px] pt-28 text-center"> 
     <motion.h1 variants={slideInFromTop(100,0.2)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className='text-white text-[20px] font-bold md:text-[35px] mb-4'>Fueling Curiosity, Igniting Passion: <span className='text-green-500'> Your Journey into the Cosmos Begins Here.</span> </motion.h1>
     <motion.p variants={slideInFromTop(100,0.4)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className='text-gray-300 mb-3'>At SPACE, we are more than just a digital cosmos guide; we are architects of curiosity, passionate about sharing the marvels of the universe. Our mission is to inspire and educate, weaving together the threads of astronomy, exploration, and discovery. Embark on a cosmic journey with us as we navigate the vast reaches of space, bringing you closer to the wonders that define our existence. Join our community, where the fascination for the unknown meets the thrill of exploration. Welcome to a space where knowledge transcends boundaries, and the stars are the stepping stones to boundless discovery.</motion.p>
    </div>
      <motion.div variants={opacity(0.6)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className="">
         <Img src={AboutImage} alt="About Image" className='h-full w-full' />
      </motion.div>
    </div>
    </Container>
  )
}
