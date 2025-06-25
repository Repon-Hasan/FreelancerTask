import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import task from '../../assets/task.jpeg'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet-async'

function TaskDetails() {
    const Task= useLoaderData()
    console.log(Task)
     const [bidsCount, setBidsCount] = useState(Task.bidsCount || 0);
     const {

_id,
title,
category,
description,
deadline,
budget,
email,
userName
      } = Task
const handleBidClick = () => {
  fetch(`https://backend-nu-livid-37.vercel.app/tasks/${Task._id}/bid`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setBidsCount(prev => prev + 1);
      }
    })
    .catch(error => console.error("Error bidding:", error));
};


  return (
    <div>
      <Helmet>
              <title>Add data</title>
              <meta name="description" content="Welcome to the homepage of My App" />
            </Helmet>
            
           <div className=''>
          
            <div className="card bg-base-100 w-96 shadow-sm h-[550px] mx-auto md:mt-10">
                <h2 className='mx-auto my-3 text-xl font-semibold text-gray-400'>You bid for {bidsCount} opportunities.</h2>
        <figure>
          
          <img className='w-full'
            src={task}
            alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-gray-400'>{description}</p>
          <div className='font-semibold'>
            
                <div className='flex justify-between'>

     <div className='font-semibold text-gray-500'>
          <p>{userName}</p>
        <p>{deadline}</p>
        <p>{email}</p>
     
    </div>
    <div className='mt-3 font-semibold'>
       <p className='text-gray-400'>{category}</p>
      <p className='text-green-600 font-bold'>{budget} Taka</p>
     
    </div>
   </div>
          </div>
         <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => handleBidClick()}
                  >
                    Bids
                  </button>
        </div>
      </div>
      
          </div>
         
    </div>
  )
}

export default TaskDetails
