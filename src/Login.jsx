import React from 'react'
import { useState,useRef } from 'react';
import { validateForm } from './utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
   
  const navigate= useNavigate();
  const [isSignIn, setSignIn]=useState(true);
  const [errorMsg , setErrorMsg]=useState(null) ;
  const email=useRef(null);
  const password=useRef(null) ;
  const name=useRef(null) ;
  
 const handleSignIn =()=>{
     //Toggle functionality
       setSignIn(!isSignIn);
 }; 
 const handleBtnClick = (e) => {
  //Validation 

  // validateForm()
  console.log(email);
  console.log(password);
   e.preventDefault();
    const nameValue= isSignIn ? null : name.current.value.trim() ;

   const msg=validateForm(email.current.value.trim(), password.current.value.trim(),nameValue,isSignIn)
   setErrorMsg(msg);
   if(msg){
     return ;
   }

   //Logic for Sign Up Form 
   if(!isSignIn){
       createUserWithEmailAndPassword(auth, email.current.value.trim(), password.current.value.trim())
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate('/feed') ;
    // console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage);
  });
   }
   else{
       //Logic for Sign In Form
      signInWithEmailAndPassword(auth,  email.current.value.trim(), password.current.value.trim())
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
       navigate('/feed') ;
       console.log(user);
     })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage+errorCode);
  });
 
   }
}
  return (
      <div className='relative w-full h-screen z-0 '>
        <img src='/images/tinderly_bg.png'
         alt='background'
         className='absolute inset-0 w-full h-full object-cover z-0'
         />
          <div className='relative z-10 flex items-center justify-center h-full '>
         <fieldset className="fieldset rounded-box w-xs border p-6 shadow-lg bg-none">
         <h2 className="text-3xl font-bold text-center mb-4 btn text-black bg-transparent">
         {isSignIn ? 'Sign In' : 'Sign up'}
         </h2>

          {!isSignIn && (<input ref={name} type="email" className="input" placeholder="Full Name" /> )}

         {/* <label className="label text-black">Email</label> */}
         <input ref={email} type="email" className="input mt-4" placeholder="Email" />

         {/* <label className="label mt-2 text-black">Password</label> */}
         <input ref={password} type="password" className="input mt-4" placeholder="Password" />
            <p className='text-red-400'>{errorMsg}</p>
           <button className="btn btn-neutral mt-4 bg-gradient-to-r from-pink-500 to-red-500" onClick={handleBtnClick}>{isSignIn ? 'Sign In' : 'Sign up'}</button>
           <p className='text-lg cursor-pointer' onClick={handleSignIn}>{isSignIn ? 'New User? Sign up now': 'Already registered! Sign in now'}</p>
        </fieldset>
            </div>
    </div>
  )
}

export default LoginPage ;
