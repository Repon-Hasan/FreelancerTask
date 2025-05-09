import React from 'react'
import error from '../assets/error.jpg'
import Navbar from '../component/Header/Navbar'
import { Link } from 'react-router'
function Error() {
  return (
    <div>
          <div>
  

        <img className='mx-auto rounded-xl mt-8 w-[450px] shadow-sm' src={error} alt="" />

        <h1 className='text-center text-3xl text-red-400 font-semibold mt-3'>404 - page not found</h1>
        <p className='mt-2 text-center font-semibold'>Oop! The page you are looking for doesn't exist</p>
        <Link to='/'> <button className='ml-[45vw] mt-3 '><span className='text-white bg-green-600 px-auto py-1 px-1.5 rounded-xl'>Go Back Home</span></button> </Link>
    </div>
    
    </div>
  )
}

export default Error
