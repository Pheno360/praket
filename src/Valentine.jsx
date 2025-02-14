import React from 'react'
import { Link } from 'react-router-dom'
import heart from './assets/heart.png'
import {motion} from 'motion/react'
const Valentine = () => {
  return (
    <div className='h-screen w-full'>
    
    <div className=' h-screen flex justify-center flex-col text-center font-black text-5xl text-[#ffdafc]'>
    <div className=' absolute z-20 flex flex-col items-center w-full -mt-5 '>
      <div className=' flex '>
      <motion.img drag className=' h-48 -rotate-12 ' src={heart} alt="" />
      <motion.img drag className='h-48 rotate-12 ' src={heart} alt="" />
      </div>

      <div className='flex -mt-18 '>
      <motion.img drag className='h-52  ' src={heart} alt="" />
      </div>

      <div className='flex -mt-32 gap-5'>
      <motion.img drag className='h-48 ' src={heart} alt="" />
      <motion.img drag className='h-48 ' src={heart} alt="" />
      </div>
      
    </div>
      <h1>Roses are red, violets are blue,</h1>
      <h1>I'm bad at poems😅, but</h1>
      <h1>  <p className='tag text-pink-500 shadow-black'>Happy Valentines Day</p> to you...!🥰</h1>

      <Link to="/memories"> <button className='text-3xl text-white -ml-20 mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2 absolute z-40 '>Next</button></Link>
    </div>

    </div>
  )
}

export default Valentine
