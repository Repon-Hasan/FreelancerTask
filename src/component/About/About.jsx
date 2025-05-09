import React, { useContext } from 'react'
import { vlalueContext } from '../../Layout/Homelayout'
import { Navigate } from 'react-router'
import good from"../../assets/good.jpeg"

function About() {

     const {user,loading}=useContext(vlalueContext)

  return (
    <div>
      <div className="p-6 md:mt-6">
      <h1 className="  mb-4 text-center text-6xl font-bold">About Our Farm</h1>
      <p className="mb-2 py-3 text-gray-400 font-semibold text-center text-xl ">
        We are a family-run vegetable farm committed to organic, sustainable farming practices.
        Our produce is grown without harmful chemicals and harvested fresh for delivery.
      </p>
      <img src={good} className='mx-auto rounded-xl w-full h-auto' alt="" />
      <p className='text-center py-3.5 text-red-500 font-bold md:text-3xl'>
        Our mission is to bring healthy, affordable, and locally grown vegetables to every home.
        Thank you for supporting our journey toward a greener future!
      </p>
    </div>

<div >

<div className="collapse bg-base-100 border border-base-300 shadow">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-semibold md:ml-36">Q: Why are vegetables important for health?</div>

  <div className="collapse-content text-md text-gray-500 md:ml-36 ">A: They provide essential vitamins, minerals, and fiber for overall well-being..</div>
</div>

<div className="collapse bg-base-100 border border-base-300 shadow">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-semibold md:ml-36">Q: How do vegetables help with digestion?</div>

  <div className="collapse-content text-md text-gray-500 md:ml-36 ">A: High fiber content supports healthy digestion and prevents constipation.</div>
</div>


<div className="collapse bg-base-100 border border-base-300 shadow">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-semibold md:ml-36">Q: Can vegetables help prevent diseases?</div>

  <div className="collapse-content text-md text-gray-500 md:ml-36 ">A: Yes, they lower the risk of heart disease, diabetes, and some cancers.</div>
</div>

<div className="collapse bg-base-100 border border-base-300 shadow">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-semibold md:ml-36">Q: Do vegetables help with weight management?</div>

  <div className="collapse-content text-md text-gray-500 md:ml-36 ">A: Yes, they are low in calories and keep you full longer.</div>
</div>

<div className="collapse bg-base-100 border border-base-300 shadow">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-semibold md:ml-36"> Q: How do vegetables support the immune system?</div>

  <div className="collapse-content text-md text-gray-500 md:ml-36 ">A: They contain antioxidants and nutrients like vitamin C that boost immunity.</div>
</div>



</div>

    </div>
  )
}

export default About
