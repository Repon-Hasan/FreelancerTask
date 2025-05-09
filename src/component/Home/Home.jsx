import React from 'react'
import banner from '../../assets/banner.webp'
function Home() {
  return (
    <div>
    <div className="relative">
  {/* Image */}
  <img
    className="mx-auto h-auto md:mt-8 mt-3 object-cover rounded-2xl max-h-screen w-[1300px] md:px-6 px-2 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"
    src={banner}
    alt="Banner"
  />

  {/* Centered Text */}
  <div className="absolute top-1/2 md:left-1/3 left-1/2 h-auto transform -translate-x-1/2 -translate-y-1/2 text-center text-black shadow-sm ">
  <h1 className='md:text-5xl text-xl'>Eat Fresh. <span className='font-bold text-red-600'>Be Healthy!</span></h1>
  <p className='mt-3 text-2xl font-semibold '>Get Your Vegetables Weekly & Monthly Box!</p>
<div className='mt-2.5'>
<p className="text-lg font-semibold">100% Satisfaction Guarantee</p>
<p className="text-lg font-semibold display-block">World-Class Shaving Products</p>
</div>
  </div>
</div>
   
    </div>
  )
}

export default Home
