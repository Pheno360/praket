import React from 'react'
import { Link } from 'react-router-dom'

const Memories = () => {
  return (
    
        <div>
       <div className={` transition font-black flex  h-screen flex-col justify-center items-center`}>
    <h1 className=' text-7xl text-center text-[#ffdafc]'>Lets Make Memories</h1>
     <p className=' text-center text-pink-600 mt-4 md:text-3xl text-lg md:w-3/4 w-full'>So today will be a magical day that I hope you will love. The best part is spending time together
     and enjoying delicious food.😋</p>

    <Link to="/journey"><button className="  text-3xl text-white mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2">Lets Go!</button></Link>
    </div>
    </div>
   
  )
}

export default Memories
