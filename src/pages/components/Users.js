import Image from 'next/image';
import React from 'react'

const Users = ({first, last, pic, title}) => {
  return (
    <div className='flex flex-row p-3 sm:w-5/12 '>
            <div>
                <Image 
                alt='Kologram user'
                height={72}
                width={72}
                src={pic}
                className='rounded-3xl'
                />
            </div>
            <div className='flex flex-col px-3'>
                    <p className='text-lg'>{first} {last}</p>
            </div>
    </div>
  )
}

export default Users;