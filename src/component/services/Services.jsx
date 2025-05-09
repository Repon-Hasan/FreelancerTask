import React, { useEffect, useState } from 'react'
import Details from './Details'

function Services({data}) {
  const [showall,setshowall]=useState(false)
  const [display,setDisplay]=useState([])

  useEffect(()=>{
    if(showall){
      setDisplay(data)
    }
  else{
    setDisplay(data.slice(0,6))
  }
    },[data,showall]);
 
  return (
    <div className='grid md:grid-cols-3 gap-6 md:px-24 md:my-4 px-4'>
      {
        display.map(item=> <Details item={item}></Details> )
      }

       <button onClick={()=> setshowall(!showall)} className=' bg-[#0EA106] text-xl font-semibold text-white px-3 py-1.5 rounded-3xl  '>{showall?"Hide product":"Show All product"}</button>


    </div>
  )
}

export default Services
