import React, { useState } from 'react'
import Container from '../Container'
import { slideInFromTop } from '../utils/motion';
import { motion } from 'framer-motion';

export default function Contact() {
  const [ input, setinput ] = useState({
    Username: '',
    email: '',
    password: ''
  })
  const [data, setData] = useState({});
  const handleSubmit  = (e)=>{
    e.preventDefault()
  }
  
  const handleinput = (e)=>{
    const value = e.target.value
    const name = e.target.name 
    setinput((pre)=>{
      return {...pre , [name]:value }
    })
    setData(input)
}

  return (
    <Container>      
    <div id='contact' className='h-full w-full flex justify-around items-center'>
      <motion.form variants={slideInFromTop(100,0.7)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='flex justify-center items-start pl-9 flex-col  h-[500px] mt-28 mb-40 w-[400px] bg-black rounded-xl' onSubmit={handleSubmit}>
      <h3 className='text-white mx-auto mb-3 font-bold'>GET IN TOUCH</h3>
        <label className='text-white'>Email</label>
        <input type="email" placeholder='Email' value={input.email}  name='email'  onChange={handleinput} className='w-[90%] py-3 px-3 mb-4' />
        <label className='text-white'>Full Name</label>
        <input type="text" placeholder='Full Name' name='Username' value={input.Username} onChange={handleinput} className='w-[90%] py-3 px-3 mb-4'  />
        <label className='text-white'>Password</label>
        <input type="password" placeholder='Password'  name='password' value={input.password} onChange={handleinput} className='w-[90%] py-3 mb-4 px-3' />
        <button className='py-2 px-4 text-white bg-[#1a1a1a] rounded-sm'>Submit</button>
      </motion.form>
      <div className="">

      </div>
    </div>
    </Container>
  )
}
