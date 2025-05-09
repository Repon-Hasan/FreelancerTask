import React, { useContext } from 'react'
import logo from "../../assets/logo.webp"
import { Link, NavLink, useNavigate } from 'react-router'
import { vlalueContext } from '../../Layout/Homelayout'
import './Navbar.css'
function Navbar() {
      
        const {a,signOutFromPage,user,loading  }=useContext(vlalueContext);
          //console.log(user.displayName)
        const navigate = useNavigate()
        const handleLogout=()=>{
          signOutFromPage()
        }

        if (loading) {
          return <span className="loading loading-spinner loading-xl mx-auto"></span>; // or a spinner, etc.
        }

  return (
    
<div className="navbar bg-base-100 md:px-20 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns={logo} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>

      </ul>
    </div>
<img src={logo} className='md:w-42 w-24' alt="" />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 md:text-xl font-semibold">
 
    

      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </ul>
  </div>
    
  <div className="navbar-end">
   <p className='px-3 md:block hidden'>{user?.email}</p>
  {user ? (
  <>
    <Link to="/" onClick={handleLogout} className="btn bg-blue-600">Sign out</Link>
   
<img className='w-14 rounded-full'  title={user.displayName} src={`${user ? user.photoURL : "nai "}`}/>

  </>
  
) : (
  <> 
   <Link to="/signup" className="btn bg-blue-600">Sign Up</Link>
   <Link to="/signin" className="btn bg-blue-600">Sign in</Link>
   
  </>
  
)}


  </div>
</div>
  )
}

export default Navbar
