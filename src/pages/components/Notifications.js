import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {notice} from '../../data/notice';
import Image from 'next/image';


const Notifications = () => {
    <Head><title>Notifications</title></Head>

    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(notice)
    },[])
    return (
    <div>
      {items.map((item, index)=>(
        <div key={index} className='flex flex-row '>
        <div className='flex flex-col'>
            <Image
              alt='Kilogram user'
              height={80}
              width={80}
              src={'/images/user.jpg'}
              className='rounded-full'
            />
        </div>
        <div className='flex flex-col'> 
        <p className='text-lg'>{item.text}</p>
        <p className='text-xs'>{item.date}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Notifications;