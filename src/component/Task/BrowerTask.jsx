import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router'
import task from '../../assets/task.jpeg'
import ReactTooltip from 'react-tooltip';
import Footer from '../Footer/Footer';
//import 'react-tooltip/dist/react-tooltip.css';


function BrowerTask() {
  const data=useLoaderData();
    useEffect(() => {
    ReactTooltip.rebuild(); // ✅ Re-initialize tooltip after data loads
  }, [data]);
 
  console.log(data)
  

  return (
     <>
  
    <div className='grid md:grid-cols-3 md:mt-12 '>
    {data.map(item => (
       <div className=''>
      
            <div className="card bg-base-100 w-96 md:mt-6 shadow-sm h-[400px] mx-auto">
        <figure>
          <img className='w-full'
            src={task}
            alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className='text-gray-400'>{item.description}</p>
         <div className='flex justify-between'>

     <div className='font-semibold text-gray-500'>
          <p>{item.userName}</p>
        <p>{item.deadline}</p>
        <p>{item.email}</p>
     
    </div>
    <div className='mt-3 font-semibold'>
       <p className='text-gray-400'>{item.category}</p>
      <p className='text-green-600 font-bold'>{item.budget} Taka</p>
     
    </div>
   </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" data-tip="Click this button! for details"> <Link to={`/task/${item._id}`}>See Details.. </Link> </button>
          
          </div>
        </div>
      </div>
      
          </div>
    ))}
            <ReactTooltip />
       
  </div>

  <Footer></Footer>
</>
  )
}

export default BrowerTask
