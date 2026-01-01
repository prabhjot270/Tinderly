import React from 'react'
import { useState } from 'react';
const ProfileCard = ({profile,onLike,onDislike}) => {
     const {name,age,bio,image,city}=profile ;
    const [swipe,setSwipe]=useState(null) ;

  const handleReject=()=>{
       setSwipe("left")

       setTimeout(()=>{
         onDislike() ; //inform the parent component 
         setSwipe(null) //reset state
       },400);
    
  }
  const handleAccept=()=>{
    setSwipe("right")

    setTimeout(()=>{
      onLike() ; //inform the parent component 
      setSwipe(null) //reset state 
    },400)
   
  }

  return (
    <div className='absolute flex flex-col container mx-auto px-4 py-6 top-40 left-1/2 -translate-x-1/2  z-10 h-1/2 w-80' >
    <div className='mb-2'>
      <h2 className='text-2xl font-bold text-white bg-none px-10 py-0'>Discover Profiles</h2>
    </div>
    {/* profile cards */}
       <div className={`relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-out 
       hover:scale-[1.05] hover:border border-white
          ${swipe === "right" ? "translate-x-40 rotate-6 opacity-0" : ""}
          ${swipe === "left" ? "-translate-x-40 -rotate-6 opacity-0" : ""} 
       `}>
         <img 
         src={image}
         alt={name}
         className='absolute inset-0 w-full h-full object-cover rounded-2xl '
         />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

          <div className='absolute bottom-0 p-4 text-white z-10'>
           <h2 className='text-xl font-semibold'>{name},{age}</h2>
           <p className='text-md opacity-90'>{bio} • {city}</p>
          </div>

       </div>
       <div className='flex items-center justify-between px-4 py-2 '>
        <button className='bg-red-500  rounded-2xl px-6 py-2 cursor-pointer hover:scale-[1.05] mt-2' onClick={handleReject} disabled={!!swipe}> ╳</button>
        <button className='bg-white  rounded-3xl px-6 py-2 cursor-pointer  hover:scale-[1.05] mt-2' onClick={handleAccept}  disabled={!!swipe}>❤️</button>
       </div>
    </div>
  )
}

export default ProfileCard
