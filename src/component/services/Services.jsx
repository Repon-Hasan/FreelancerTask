import React, { useEffect, useState } from 'react'
import Details from './Details'

function Services({data}) {
  //const [showall,setshowall]=useState(false)
  const [display,setDisplay]=useState(data)

  // useEffect(()=>{
  //   if(showall){
  //     setDisplay(data)
  //   }
  // else{
  //   setDisplay(data.slice(0,6))
  // }
  //   },[data,showall]);
 
  return (
    <div className='grid md:grid-cols-3 gap-6 md:px-24 md:my-4 px-4 md:mt-28'>
      {
        Array.isArray(display) && display.map(item=> <Details item={item}></Details> )
      }

       


    </div>
  )
}

export default Services
