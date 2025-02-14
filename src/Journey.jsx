import React from 'react'
import { Link } from 'react-router-dom'
import photo from './assets/photo.jpg'

const Journey = () => {
  return (
    <div className=' h-auto flex-col flex items-center mt-10 text-7xl'>
      <div className=' font-black text-pink-500 '>OUR JOURNEY <br></br> <p className=' text-xl ml-5'>Special moments</p></div>

      <div className='flex md:w-1/2 sm:w-full mt-10 gap-4'>
        <img className=' h-32 ' src="https://i.pinimg.com/736x/0e/7d/9f/0e7d9f33b41007faccb28c21d0fdccfc.jpg" alt="" />
        <div>
        <h1 className=' text-3xl font-black'>13th September 2024</h1>
        <p className='text-xl md:w-[28vw] sm:w-full'>First time when we met as strangers without having any idea about our future.</p>
        </div>
      </div>

      <div className='flex md:w-1/2 sm:w-full  mt-10 gap-4'>
        <img className=' h-32 ' src={photo} alt="" />
        <div>
        <h1 className=' text-3xl font-black'>27th October 2024</h1>
        <p className='text-xl lg:w-[28vw] sm:w-full'>Finally it was our first meet in real after 44 days since we got connected.</p>
        </div>
      </div>

      <div className='flex md:w-1/2 sm:w-full mt-10 gap-4'>
        <img className=' h-32 ' src="https://i.pinimg.com/736x/1f/e0/20/1fe02040dc3f434218cc8921fba01eba.jpg" alt="" />
        <div>
        <h1 className=' text-3xl font-black'>7th January 2025</h1>
        <p className='text-xl md:w-[28vw] sm:w-full'>We hugged for the first time and it felt very special 😊</p>
        </div>
      </div>

      <h1 className='text-2xl mt-4 text-center font-bold text-pink-500 '>Lets continue to make more beautiful memories together✨</h1>

      <div>
        <Link to="/more"><button className=' text-3xl mb-4 text-white mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2'>Next</button></Link>
      </div>
    </div>
  )
}

export default Journey
