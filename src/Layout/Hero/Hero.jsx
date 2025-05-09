import React from 'react'
import img from '../../assets/img-2.webp'
import img1 from '../../assets/img1.webp'

function Hero() {
  return (
    <>
    <div className='md:mx-10 mx-2'>
   <h1 className='md:mt-10 mt-6 md:text-7xl font-bold text-center text-md'>Some product and information</h1>
        <div className="">
  <div className="hero-content md:flex flex-col md:flex-row ">
    <img
      src={img}
      className="md:max-w-sm w-full rounded-lg shadow-xl md:mt-6 mt-2"
    />
    <div className='md:ml-6  md:pb-1 pb-38 '>
      <h1 className="md:text-5xl text-md font-bold ">TheCrate's Member Benefits</h1>
      <p className="mt-2 text-black text-xl">
      5 Wonderful beauty treats, lovingly wrapped and delivered
      to their door. TheCrate gift vouchers are perfect, quick, and simple solutions for birthdays celebration. Delivering you door without having every time something. 

      <ul className='mt-3 text-gray-500 font-semibold md:mb-1 '>
        <li>1.100% Satisfaction Guarantee</li>
        <li>2.liStay Up-To-Date Through Newsletter</li>
        <li>3.Member Pricing Discounts</li>
        <li>4.Award-Winning Crate Community</li>
      </ul>
      </p>
      
  
   
    </div>
  </div>
</div>
      
    </div>



    <div className='md:mx-10 mx-2'>
 
        <div className="">
  <div className=" md:flex flex-col-reverse md:flex-row ">
  

    <div className='md:ml-6  md:pb-1 md:mt-10  '>
      <h1 className="md:text-5xl text-md font-bold ">Get Started Today</h1>
      <p className="mt-2 text-black text-xl">
      5 Wonderful beauty treats, lovingly wrapped and delivered
      to their door. TheCrate gift vouchers are perfect, quick, and simple solutions for birthdays celebration. Delivering you door without having every time something.

   
      </p>
      
  
   
    </div>

    <img
      src={img1}
      className="md:max-w-sm w-full rounded-lg shadow-xl md:mt- md:mb-2 mb-62  "
    />
  </div>
</div>
      
    </div>
    </>
  )
}

export default Hero
