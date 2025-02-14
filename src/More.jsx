import React from 'react'
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <div>
       <div className={` transition font-black flex  h-screen flex-col justify-center items-center`}>
    <h1 className=' text-7xl text-center text-[#ffdafc]'>Theres still something more than this...</h1>

    <Link to="/birthday"><button className="  text-3xl text-white mt-8 border hover:bg-pink-500 transition rounded-3xl px-3 py-2">Are you Ready?</button></Link>
    </div>
    </div>
  )
}

export default More
