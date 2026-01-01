import React from 'react'
import ProfileCard from './ProfileCard'
import { useState } from 'react'
import { profiles } from './utils/profilesdata.js'

const FeedProfiles = () => {
    const [currentIndex,setCurrentIndex]=useState(0)

   const nextProfile = () => {
  setCurrentIndex((prev) => (prev + 1) % profiles.length);
};
  
    const currentProfile=profiles[currentIndex] ;

    if (!profiles.length) {
  return <p className="text-white">No profiles available</p>;
}
  return (
    <div>
      <ProfileCard
       profile={currentProfile}
       onLike={nextProfile}
       onDislike={nextProfile}
      />
    </div>
  )
}

export default FeedProfiles
