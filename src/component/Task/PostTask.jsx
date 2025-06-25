import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';
function PostTask() {
    const navigate = useNavigate();
  const InitialTasks =useLoaderData();
  const [Task,setTasks]=useState(InitialTasks)
  

const handleDelete=(_id)=>{
   // console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {
    //start deleting the coffee
    https://backend-nu-livid-37.vercel.app/task
    fetch(`https://backend-nu-livid-37.vercel.app/task/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
        if(data.deletedCount){
   Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    //remove the coffee from the useState
 const remainingTasks = Task.filter(task => task._id !== _id);
setTasks(remainingTasks);

        }
      // console.log("after delete",data)

    })

 
  }
});
}

const handleHide = (id) => {
  const selectedTask = Task.find(t => t._id === id);
  if (selectedTask) {
    
Swal.fire({
  title: `Bid count is ${selectedTask.bidsCount || 0}`,
  icon: "success",
  draggable: true
});
  
  } else {
    alert("Task not found");
  }
};
 


  return (
    
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Posted Tasks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">UserName</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Task.map((task) => (
              <tr key={task._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{task.title}</td>
                <td className="py-2 px-4 border-b">{task.userName}</td>

                <td className="py-2 px-4 border-b">{task.category}</td>
                <td className="py-2 px-4 border-b">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => navigate(`/update/${task._id}`)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={()=>handleDelete(task._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                         onClick={()=>handleHide(task._id)}
                  >
                    Bids
                  </button>
                </td>
              </tr>
            ))}
            {Task.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
     <Footer></Footer>
    </div>
  )
}

export default PostTask
