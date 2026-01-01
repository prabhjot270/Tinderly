import React from 'react'
import Header from './Header.jsx'
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from './utils/userSlice.js';
import MarketingCards from './MarketingCards.jsx';
import TestimonialsCards from './Testimonials.jsx';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const dispatch= useDispatch() ;
    const location=useLocation() ;
    const navigate=useNavigate() ;
    const isHome=location.pathname==='/' ;

const handleLogin=()=>{
      navigate('/login') ;
    }
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, (user) => {
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
     return () => {
      unsubscribe();
     }
},[])

  return (
    <div className="absolute w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
   {isHome &&(  <>
    <img 
        src='/images/bg_updated_final.png'
        alt='background'
        className='absolute inset-0 w-full h-[110vh]  object-cover z-10'
      />
      <button className='absolute top-100 left-180 bg-black z-20 p-4 mx-auto text-white rounded-full bg-gradient-to-r from-pink-500 to-red-500 cursor-pointer
       hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-in-out px-6'
      onClick={handleLogin}>Get Started</button>
      </>
    )}
      {/* Content with z-index to appear above background */}
      <div className="relative z-10 flex flex-col">
        <Header/>


        <main className="h-screen"> 
          <Outlet/>
        </main>
             
      
         {isHome &&(
           <section className='px-6 py-4 bg-pink-200'>
           <TestimonialsCards/>
           
           </section>
        )}
           { isHome &&(
          <section className='px-6 py-4 bg-pink-200'>
            <MarketingCards/>
          </section>
        )}
        <Footer/>
      </div>
     </div>
  )
}

export default Body

