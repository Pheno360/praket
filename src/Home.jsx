import React from 'react'
import { Link } from 'react-router-dom'
import BlurText from './BlurText'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {

  useGSAP(()=>{
    gsap.to('.blur-text',{
      y:-800,
      delay:3,
      duration:2
    })
  })
  return (

    
    <div>
    <div className=' bg-white absolute blur-text h-screen w-full flex justify-center items-center  '>
    <BlurText
  text="Made by Aniket for Pragati with 💖"
  delay={150}
  animateBy="words"
  direction="top"
  className="text-6xl mb-8 text-pink-500 font-bold  "
/>
    </div>
       <div className={` transition font-black flex  h-screen flex-col justify-center items-center`}>
    <h1 className=' text-7xl text-center text-[#ffdafc]'>Special Surprise For a Special Person 😍</h1>

    <Link to="/valentine"><button className="  text-3xl text-white mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2">Explore</button></Link>
    </div>
    </div>
  )
}

export default Home
