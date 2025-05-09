import React, { useContext } from 'react'
import { vlalueContext } from '../../Layout/Homelayout'
import { Navigate, useLocation } from 'react-router';

function Privaterout({children}) {

  const {user,loading}=useContext(vlalueContext)

  const {pathname} =useLocation()

  console.log(pathname)
  if(loading){
    return <div>loading.....</div>
  }

  if(!user || !user?.email){
   return <Navigate state={{from:location.pathname}} to='/Signin'></Navigate>
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default Privaterout
