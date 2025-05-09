import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-300 rounded-xl mt-3 '>
      <footer className="px-4 py-8 md:py-10 divide-y dark:bg-green-50 dark:text-green-900">
        <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-6 lg:space-y-0 lg:flex-row">
          <div className="flex justify-center lg:justify-start">
            <a href="#" className="flex md:items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full dark:bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M16 0C7.163 0 0 7.163 0 16a16 16 0 1032 0C32 7.163 24.837 0 16 0zm0 29.333C8.636 29.333 2.667 23.364 2.667 16S8.636 2.667 16 2.667 29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold mx-0 sm:mx-auto">FreshHarvest</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-sm  w-2/3">
            <div>
              <h3 className="uppercase font-semibold dark:text-green-800">Our Produce</h3>
              <ul className="space-y-1 mt-2">
                <li><a href="#">Seasonal Vegetables</a></li>
                <li><a href="#">Organic Greens</a></li>
                <li><a href="#">Fresh Herbs</a></li>
                <li><a href="#">Fruits & Roots</a></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-semibold dark:text-green-800">About Us</h3>
              <ul className="space-y-1 mt-2">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-semibold dark:text-green-800">Customer Help</h3>
              <ul className="space-y-1 mt-2">
                <li><a href="#">Delivery Info</a></li>
                <li><a href="#">Returns & Refunds</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase font-semibold dark:text-green-800">Connect With Us</h3>
              <div className="flex items-center space-x-2 mt-2">
                <a href="https://www.facebook.com/sheitomi.kothay/" className="p-2 rounded-full hover:bg-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M32 16c0-8.839-7.167-16-16-16S0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803V20.626h-4.063v-4.625H13.5v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937H21.104c-1.984 0-2.604 1.235-2.604 2.5v3H23.5l-0.713 4.625h-3.724v11.177C26.151 30.604 32 23.984 32 16z" />
                  </svg>
                </a>
                
              
              </div>
                <a href="mailto:reponh6564@gmail.com" className="text-sm break-all">reponh6564@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-sm text-center text-green-600">
          © {new Date().getFullYear()} FreshHarvest. Grown with care. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer;
