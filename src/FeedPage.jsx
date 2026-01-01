import React from 'react'
import FeedProfiles from './FeedProfiles'

const FeedPage = () => {
  return (
    <div className='h-full overflow-y-auto z-0'>
        <img 
        src='/images/bg_feed.png'
        alt='background'
        className=' inset-0 w-full h-full object-cover z-10'
      />
     <FeedProfiles></FeedProfiles>
    </div>
  )
}

export default FeedPage
