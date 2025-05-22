// import React from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async';
import task from '../../assets/task.jpeg'

function Details({item}) {

     const {

_id,
title,
category,
description,
deadline,
budget,
email,
userName
      } = item
  return (
    <div className=''>

      <div className="card bg-base-100 w-96 shadow-sm h-[400px]">
  <figure>
    <img className='w-full pt-3'
      src={task}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-gray-400 font-bold'>{description}</p>

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
</div>

    </div>
  )
}

export default Details




