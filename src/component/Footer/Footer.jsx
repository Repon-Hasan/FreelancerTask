import React from 'react'

function Footer() {
  return (
<div className='bg-gray-300 rounded-xl mt-3'>
<footer className="px-4 divide-y dark:bg-green-50 dark:text-green-900 ">
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      <div className="lg:w-1/3">
        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
          <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-white">
              <path d="M16 0C7.163 0 0 7.163 0 16a16 16 0 1032 0C32 7.163 24.837 0 16 0zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333z"></path>
            </svg>
          </div>
          <span className="self-center text-2xl font-semibold">FreshHarvest</span>
        </a>
      </div>
      <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-green-800">Our Produce</h3>
          <ul className="space-y-1">
            <li><a rel="noopener noreferrer" href="#">Seasonal Vegetables</a></li>
            <li><a rel="noopener noreferrer" href="#">Organic Greens</a></li>
            <li><a rel="noopener noreferrer" href="#">Fresh Herbs</a></li>
            <li><a rel="noopener noreferrer" href="#">Fruits & Roots</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="tracking-wide uppercase dark:text-green-800">About Us</h3>
          <ul className="space-y-1">
            <li><a rel="noopener noreferrer" href="#">Our Story</a></li>
            <li><a rel="noopener noreferrer" href="#">Sustainability</a></li>
            <li><a rel="noopener noreferrer" href="#">Careers</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="uppercase dark:text-green-800">Customer Help</h3>
          <ul className="space-y-1">
            <li><a rel="noopener noreferrer" href="#">Delivery Info</a></li>
            <li><a rel="noopener noreferrer" href="#">Returns & Refunds</a></li>
            <li><a rel="noopener noreferrer" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="uppercase dark:text-green-800">Connect With Us</div>
          <div className="flex justify-start space-x-3">
            <a rel="noopener noreferrer" href="https://www.facebook.com/sheitomi.kothay/" title="Facebook" className="flex items-center p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                <path d="M32 16c0-8.839-7.167-16-16-16S0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803V20.626h-4.063v-4.625H13.5v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937H21.104c-1.984 0-2.604 1.235-2.604 2.5v3H23.5l-0.713 4.625h-3.724v11.177C26.151 30.604 32 23.984 32 16z"/>
              </svg>
            </a>
           
            
          </div>
        </div>
      </div>
    </div>
    <div className="py-6 text-sm text-center dark:text-green-600">
      © {new Date().getFullYear()} FreshHarvest. Grown with care. All rights reserved.
    </div>
  </footer>
</div>
  
  )
}

export default Footer
