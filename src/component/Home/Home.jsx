import React, { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react";
import s1 from '../../assets/F1.jpeg'
import s2 from '../../assets/F2.jpeg'
import s3 from '../../assets/F3.jpeg'
import s4 from '../../assets/F4.png'
import './Home.css'
function Home() {

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = (e) => {
    setIsDark(e.target.checked);
  };
  
  return (
    <div className={`md:mx-20 mx-3 ${isDark ? 'dark-theme' : 'light-theme'}`}>




<div className="carousel w-full rounded-xl md:h-[68vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={s1}
      className="w-full" />


        <div className="absolute inset-0 md:ml-36 bg-black/40 flex flex-col justify-center items-start p-6 text-white space-y-4">
    <h2 className="text-xl md:text-4xl font-bold">Thrive in the world of Freelance Excellence MarketPlace!</h2>
    <p className="text-sm md:text-base max-w-md">
    Top Global Experts lead online professional course,delivering quality education accessibility to learners world wide 
    </p>
  </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={s2}
      className="w-full" />

        <div className="absolute inset-0 md:ml-36 bg-black/40 flex flex-col justify-center items-start p-6 text-white space-y-4">
        <h4 className='font-bold text-black text-xl'>Boots Your Working Flow</h4>
    <h2 className="text-xl md:text-4xl font-bold">Exploring The Collection of Project</h2>
    <p className="text-sm md:text-3xl  text-black font-bold max-w-md">
 Complete your Project and Earn Money
    </p>
  </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>

  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={s3}
      className="w-full" />

             <div className="absolute inset-0 md:ml-36 bg-black/40 flex flex-col justify-center items-start p-6 text-white space-y-4">
       
    <h2 className="text-xl md:text-4xl font-bold">Hire the best freelancers for any job, online.</h2>
    <p className="text-sm md:text-lg  text-black font-bold max-w-md">
Millions of people use of our website to turn their ideas into reality.
    </p>
    <input type="text" placeholder='Search the task' className=' border-2 p-2 rounded-xl' />
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={s4}
      className="w-full" />

               <div className="absolute inset-0 md:ml-36 bg-black/40 flex flex-col justify-center items-start p-6 text-white space-y-4">
       
    <h2 className="text-xl md:text-4xl font-bold">Hire Experts & Get Your Any Job Done</h2>
    <p className="text-sm md:text-lg  text-black font-bold max-w-md">
Work with talented people at the most affordable price to get the most out of your time and cost
    </p>
    <input type="text" placeholder='Search the task' className=' border-2 p-2 rounded-xl' />
  </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

   
    </div>
  )
}

export default Home
