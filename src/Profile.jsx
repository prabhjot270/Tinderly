import React from 'react'
import EditProfile from './EditProfile'

const Profile = () => {
  return (
    <div className='relative w-full h-full z-0 '>
      <img
      src='/images/bg_feed.png'
      alt='background'
      className='absolute inset-0 w-full h-full object-cover z-0'
      />
      <EditProfile/>
   
    </div>
  )
}

export default Profile
