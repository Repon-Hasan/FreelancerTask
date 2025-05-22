import React from 'react'
import { toast } from 'react-toastify';
import Footer from '../Footer/Footer';

function Addtask() {
  const categories = ['Web Development', 'Design', 'Writing', 'Marketing'];
    const handleSubmit = async (e) => {
    e.preventDefault();
                  const form= e.target;
          const formData= new FormData(form)
          const clientData= Object.fromEntries(formData.entries())
          console.log(clientData);
          
    await fetch('https://backend-nu-livid-37.vercel.app/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clientData),
    })
    .then((res)=>res.json())
    .then(data=>{
         if(data.insertedId)
{
  toast.success("Data added successfully")
  e.target.reset();
}
    })
   
  
  }

 
  return (
    <div>
         <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded bg-white">
      <label className="block mb-2">
        Task Title:
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded"
          required
        />

      </label>

      <label className="block mb-2">
        Category:
        <select
          name="category"
        
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
         
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Deadline:
        <input
          type="date"
          name="deadline"
      
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Budget:
        <input
          type="number"
          name="budget"
      
          className="w-full p-2 border rounded"
          required
        />
      </label>

  

            <label className="block mb-2">
        User Email:
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded"
          required
        />
        
      </label>



      <label className="block mb-4">
        User Name:
        <input
          type="text"
          name="userName"
          className="w-full p-2 border rounded bg-gray-100"
        />
      </label>

      <button
        type="submit"
      
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
   <Footer></Footer>
    </div>
  )
}

export default Addtask
