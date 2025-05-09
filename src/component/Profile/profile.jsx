import React, { useContext, useState } from 'react'
import { vlalueContext } from '../../Layout/Homelayout'
import { Helmet } from 'react-helmet-async';

function profile() {
    const {user,updateUser,setUser}=useContext(vlalueContext);

    const [loading, setLoading] = useState(false); 

   const UpdateProfile=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const Url=e.target.photo.value;
    setLoading(true); 
    updateUser({displayName:name,photoURL:Url})
	.then(() => {
		setUser({...user,displayName:name,photoURL:Url})
		navigate("/")
		
	  }).catch((error) => {
		
	  });
    
   }
  return (
 <div>
                 <Helmet>
            <title>"Update profile page"</title>
            <meta name="description" content={"View product details"} />
          </Helmet>
       <h1 className='font-semibold md:text-5xl md:mt-8 md:mb-3 text-center'>Your Profile information</h1>
<div className='grid md:grid-cols-2 grid-cols-1'>

<div className='mt-3'>
            <img src={user.photoURL
} className='mx-auto border border-gray-500 rounded-full ' alt="" />
    <p className='text-center font-semibold md:text-3xl text-xl  my-3'>Name:{user.displayName}</p>
    <p className='text-center font-semibold md:text-3xl text-xl my-3'>Email:{user.email}</p>
    <p className='text-center font-semibold md:text-3xl text-xl my-3'>PhotoURL:{user.photoURL}</p>
</div>

<div className='mt-14'>
    <h1 className='md:text-4xl text-gray-300 '>Update Your Profile</h1>

    <form onSubmit={UpdateProfile} >
   
    <div className="space-y-2">
				<label  className="block text-sm">Name:</label>

				<input  type="text" name="name"   placeholder='Enter your name' className="w-auto px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="an2nh" />
			</div>

    <div className="space-y-2">
				<label  className="block text-sm">PhotoUrl:</label>
				<input  type="text" name="photo"   placeholder="leroy@jenkins.com" className="w-auto px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="an2nh" />
			</div>

            <button   type="submit" className="w-auto my-2 border border-gray-400 hover:bg-green-700  px-4 py-2 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"  disabled={loading} fdprocessedid="5wpisv"> Update Profile</button>
    </form>
</div>

</div>


 </div>
  )
}

export default profile
