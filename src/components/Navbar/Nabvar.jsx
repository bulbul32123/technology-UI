import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react'
import logo from '/images/Logo.png';
import { motion } from 'framer-motion';
import { opacity, slideInFromLeft, slideInFromTop } from '../utils/motion';
import Img from '../Img';

export default function Nabvar() {
    const [isOpen, setOpen] = useState(false)
    const [showbg, setShowBg ] = useState(false)
    window.addEventListener(('scroll'), () => {
        const scrollValue = window.scrollY
        if (scrollValue >= 600) {
            setShowBg(true)
        }
        else {
            setShowBg(false)
        }
    })
    return (
        <motion.div variants={opacity(0.2)} viewport={{ once: true }} whileInView='visible' initial='hidden'  className={`flex justify-around fixed z-20 transition-all duration-300 items-center h-20 w-full ${showbg ? 'bg-black': 'bg-transparent'}`}>
            <motion.div variants={slideInFromLeft(-40,0.3)} viewport={{ once: true }} whileInView='visible' initial='hidden' >
                <Link
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    className='cursor-pointer'
                >
                    <Img src={logo} alt="Logo" className='h-20 select-none' />
                </Link>
                
            </motion.div>
            <motion.div variants={slideInFromLeft(-40,0.5)} viewport={{ once: true }} className={`md:inline ${isOpen ? 'inline MobileNavbar' : 'hidden' }`}>
            <Link activeClass="active" to="explore" spy={true} smooth={true} offset={0} duration={800} className='mx-4 text-white py-2 px-4 cursor-pointer bg-[#232323] rounded-3xl font-extralight text-[15px]'>Explore</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={800} className='mx-4 text-white py-2 px-4 cursor-pointer bg-[#232323] rounded-3xl font-extralight text-[15px]'>About</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={800} className='mx-4 text-white py-2 px-4 cursor-pointer bg-[#282727] rounded-3xl font-bold text-[15px]'>Get in touch</Link>
            </motion.div>
            <div className="md:hidden inline ">
            <Hamburger toggled={isOpen} toggle={setOpen} color='green' />
            </div>
        </motion.div>
    )
}
