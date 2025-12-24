import React from 'react'
import Header from './Header.jsx'
import { Outlet } from "react-router-dom";
import Footer from './Footer.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from './utils/userSlice.js';

const Body = () => {
    const dispatch= useDispatch() ;

useEffect(()=>{
 onAuthStateChanged(auth, (user) => {
  if (user) {
    //if User is signed in
     const {uid,email,displayName} = user;
     dispatch(addUser({uid :uid, email:email, displayName:displayName}));
    // ...
  } else {
    // User is signed out
   dispatch(removeUser()) ;
  }
});

},[])

  return (
    <div className="absolute w-full min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image */}
      <img 
        src='/images/bg_main.png'
        alt='background'
        className='absolute inset-0 w-full h-full object-cover z-10'
      />
      
      {/* Content with z-index to appear above background */}
      <div className="relative z-10 flex flex-col">
        <Header/>
        <main className="flex-grow h-screen ">
          <Outlet/>
        </main>
        <Footer/>
      </div>
     </div>
  )
}

export default Body