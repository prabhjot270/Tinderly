import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import {auth} from './utils/firebase.js';
import {useNavigate} from 'react-router-dom';
const Header = () => {
     const user=useSelector((state)=>state.user);
     const navigate=useNavigate();

     const handleLogout=()=>{
         signOut(auth).then(()=>{
           navigate("/login",{replace:true})
         })
         .catch((error)=>{
           alert(error)
         })
     }
  return (
    <div>
       <div className="navbar bg-purple-200 shadow-lg h-16" >
  <div className="flex-1">
    <a className="btn text-3xl text-pink-400 bg-transparent hover:bg-black border-none">
      <img
      src="/images/tinderly_app_icon.jpg"
      alt="Tinderly Icon"
      className="w-14 h-14 mr-2 rounded-full"
    />
      Tinderly
      </a>

     <>
      <div className="dropdown dropdown-hover">
     <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-black text-lg text-white ml-3.5 rounded-lg border-none">Products</div>
      <ul tabIndex="-1" className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm mt-2">
      <li className='hover:text-red-400 text-lg underline'><a>Tinderly Platinum®</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Tinderly Plus™</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Tinderly Gold™</a></li>
      </ul>
      </div>
      <button className='btn bg-transparent hover:bg-black text-lg text-white ml-3.5 rounded-lg border-none'>Learn</button>
       <div className="dropdown dropdown-hover">
     <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-black text-lg text-white ml-3.5 rounded-lg border-none">Safety</div>
      <ul tabIndex="-1" className="dropdown-content menu bg-white text-black rounded-box z-1 w-52 p-2 shadow-sm mt-2">
      <li className='hover:text-red-400 text-lg underline'><a>Safety Tips</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Community Guidelines</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Safety & Policy</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Safety & Reporting</a></li>
      <li className='hover:text-red-400 text-lg underline'><a>Security</a></li>
      </ul>
      </div>
       <button className='btn bg-transparent hover:bg-black text-lg text-white ml-3.5 rounded-lg border-none'>Support</button>
       <button className='btn bg-transparent hover:bg-black  text-lg text-white ml-3.5 rounded-lg border-none'>Download</button>
       <button className='btn bg-transparent hover:bg-black text-lg text-white ml-3.5 rounded-lg border-none'>About Us</button>
    </>

  </div>
  <div className="flex gap-2 mx-10">
   
   {user && (
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Profile Picture"
            src="/images/user_icon.png" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <button className="justify-between hover:text-red-400" onClick={()=> navigate("/profile")}>
            Profile Settings
          </button>
        </li>
        <li>
          <button className="hover:text-red-400" onClick={()=>navigate("/feed")} >Back To Feed</button>
          </li>
        <li><button className="hover:text-red-400" onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>)
    }

  </div>
</div>
    </div>
  )
}

export default Header
