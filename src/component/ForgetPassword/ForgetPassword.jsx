import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  //const {handlePassword} =useContext(vlalueContext);

  useEffect(() => {
    const savedEmail = localStorage.getItem('resetEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleReset = (e) => {
    e.preventDefault()
    const email=e.target.email.value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      window.location.href = 'https://mail.google.com/';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });  


  };

  return (
    <div className='mx-auto'>
    <h2 className='text-center md:text-4xl font-semibold md:mt-10'>Forgot Password</h2>

     <form onSubmit={handleReset} className='md:pl-[630px] md:mt-10'>
  
      	<div className="space-y-2">
				<label htmlFor="email"    className="block text-sm">Email address</label>

				<input type="email" name="email"  value={email}
                 onChange={(e) => setEmail(e.target.value)} placeholder="leroy@jenkins.com" className="w-auto px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="odklv" />

			</div>
      <br />
      <button className='font-semibold border border-gray-500 hover:bg-green-600 p-3 rounded-xl' type="submit">Reset Password</button>
    </form> 


  
  </div>
  )
}

export default ForgetPassword
