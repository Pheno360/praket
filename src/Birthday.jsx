import React from 'react'
import { Link } from 'react-router-dom'

const Birthday = () => {
  return (
    <div>
    <div className='h-screen absolute -z-10 w-full scale-200'>
      <img src="https://img1.picmix.com/output/stamp/normal/8/1/1/9/2529118_04235.gif" alt="" />
    </div>
       <div className={` transition font-black flex  h-screen flex-col justify-center items-center`}>
    <h1 className=' text-7xl text-center text-[#ffdafc]'>✨Happy Birthday My Love...!💖</h1>

    <p className=' text-2xl  text-center mt-4 text-pink-500'>Every moment with you is a gift, and today, I celebrate the most Precious gift of all- you.</p>
    <p className=' text-2xl p-2  text-center mt-4 text-pink-500'>Lets make this day memorable and there's a gift waiting for you...</p>

    <Link to="/"><button className="  text-3xl text-white mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2">Experience Again</button></Link>
    </div>
    </div>
  )
}

export default Birthday
