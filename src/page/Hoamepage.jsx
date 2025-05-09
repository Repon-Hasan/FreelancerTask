import React from 'react'
import Home from '../component/Home/Home'
import Hero from '../Layout/Hero/Hero'
import Slider from '../component/slider/slider'
import { useLoaderData } from 'react-router';
import Services from '../component/services/Services';

export default function Hoamepage() {
  const data= useLoaderData();
  
  return (
    <div>
      <Home></Home>
      <Hero></Hero>
      <Slider></Slider>
      <Services data={data}></Services>
    </div>
  )
}
