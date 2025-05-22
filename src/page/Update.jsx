import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Update() {
      const categories = ['Web Development', 'Design', 'Writing', 'Marketing'];
      const data=useLoaderData();
      const navigate =useNavigate()
      const {budget,
category,
deadline,
description,
email,
title,
userName,
_id
}=data;

   const handleSubmit = async (e) => {
      e.preventDefault();
                    const form= e.target;
            const formData= new FormData(form)
            const clientData= Object.fromEntries(formData.entries())
            console.log(clientData);
            
      await fetch(`https://backend-nu-livid-37.vercel.app/update/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientData),
      })
      .then((res)=>res.json())
      .then(data=>{
             if (data.modifiedCount) {
  toast.success("Data updated Successfully");
  navigate('/postTask'); // ✅ redirect here
}   

console.log(data)
      })
     
    
    }
  

  return (
    <div>
         <div>
         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-white">
      <label className="block mb-2">
        Task Title:
        <input
          type="text"
          name="title"
          defaultValue={title}
          className="w-full p-2 border rounded"
          required
        />

      </label>

      <label className="block mb-2">
        Category:
        <select
          name="category"
          defaultValue={category} 
          className="w-full p-2 border rounded"
          // required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
             <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
         defaultValue={description}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Deadline:
        <input
          type="date"
          name="deadline"
        defaultValue={deadline}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Budget:
        <input
          type="number"
          name="budget"
      defaultValue={budget}
          className="w-full p-2 border rounded"
          required
        />
      </label>

  

            <label className="block mb-2">
        User Email:
        <input
          type="email"
          name="email"
          value={email}
          className="w-full p-2 border rounded"
          required
          readOnly
        />
        
      </label>



      <label className="block mb-4">
        User Name:
        <input
          type="text"
          name="userName"
          value={userName}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
        />
      </label>

      <button
        type="submit"
           
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
     Update Task
      </button>
    </form>
    </div>
    </div>
  )
}

export default Update
