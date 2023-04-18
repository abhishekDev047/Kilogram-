import Image from 'next/legacy/image';
import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col w-full items-center px-3 py-2'>


    <div>
        <Image 
            src={'/images/profile.jpg'}
            height={600}
            width={600}
            alt='user Profile'
            className='rounded-full'
            layout='intrinsic'
        />
    </div>

    <div className='text-center text-lg'>
        <p> Your Name</p>
        <p> About Yourself </p>
    </div>
    </div>
  )
}

export default Profile;