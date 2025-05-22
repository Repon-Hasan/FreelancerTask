import React from 'react'
import img1 from '../../assets/img1.webp'
import men from '../../assets/men.png'
import FF from '../../assets/FF.jpeg'

function Hero() {
  return (
    <>
    <div className='md:mx-10 mx-2'>
   <h1 className='md:mt-10 mt-6 md:text-7xl font-bold text-center text-md'>Some information of our website</h1>
        <div className="">
  <div className="hero-content md:flex flex-col md:flex-row ">
    <img
      src={men}
      className="md:max-w-sm w-full rounded-lg shadow-xl md:mt-6 mt-2"
    />


    <div className='md:ml-6  md:pb-1 pb-38 '>
      <h1 className="md:text-3xl text-md font-bold ">A whole world of freelance talent at your fingertips</h1>
      <div className='mt-8'>
        <h2 className='text-xl font-bold text-gray-400'>Proof of quality</h2>
              <p className="mt-2 font-bold text-xl text-gray-600">
Check any pro’s work samples, client reviews, and identity verification
    </p>
        <h2 className='text-xl font-bold text-gray-400'>No cost until you hire</h2>
              <p className="mt-2 font-bold text-xl text-gray-600">
Check any pro’s work samples, client reviews, and identity verification.
    </p>
        <h2 className='text-xl font-bold text-gray-400'>Safe and secure</h2>
              <p className="mt-2 font-bold text-xl text-gray-600">
Check any pro’s work samples, client reviews, and identity verification
    </p>


    
      </div>

  
   
    </div>

    
  </div>
</div>
      
    </div>



    <div className='md:mx-10 mx-2'>
 
        <div className="">
  <div className=" md:flex flex-col-reverse md:flex-row ">
  

    <div className='md:ml-6  md:pb-1 md:mt-42  '>
      <h1 className="md:text-5xl text-md font-bold ">Get Started Today</h1>
      <h1 className="md:text-3xl text-md font-bold mt-4 ">Join World's Best Marketplace for Workers</h1>
      <p className="mt-2 mx-4 text-xl text-gray-400">
"Minimal love does not desert responsibility; it is just some pain that loves to feel. Official benefits come gently and lovingly. Exercise in seeking pleasure is truly loved."

      </p>
      
      <p className='mt-2 font-semibold text-gray-600'>
          Connect to freelancers with proven business experience
          </p>
      <p className='mt-2 font-semibold text-gray-600'>
         Get matched with the perfect talent by a customer success manager
          </p>
      <p className='mt-2 font-semibold text-gray-600'>
         Unmatched quality of remote, hybrid, and flexible jobs
          </p>



   
      
    </div>

    <img
      src={FF}
      className="md:max-w-sm w-full md:h-96 rounded-lg shadow-xl md:mt-32 md:mb-2 mb-62  "
    />
  </div>
</div>
      
    </div>
    </>
  )
}

export default Hero
