import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {notice} from '../../data/notice';
import Image from 'next/image';
import { useSelector } from 'react-redux';


const Notifications = () => {
    <Head><title>Notifications</title></Head>

    const [items, setItems] = useState([]);
    const mode = useSelector((state)=>state.mode.value);

    useEffect(()=>{
        setItems(notice)
    },[])
    return (
    <div className={mode}>
    <div className='dark:bg-slate-900 dark:text-white py-4 text-sm sm:text-lg'>
      {items.map((item, index)=>(
        <div key={index} className='flex flex-row my-1  px-5'>
        <div className='flex flex-col w-2/12 sm:w-1/12 '>
            <Image
              alt='Kilogram user'
              height={40}
              width={40}
              src={'/images/user.jpg'}
              className='rounded-full'
            />
        </div>
        <div className='flex flex-col px-5 w-10/12 sm:w-11/12'> 
        <p >{item.text}</p>
        <p className='text-xs'>{item.date}</p>
        </div>
        </div>
      ))}</div>
    </div>
  )
}

export default Notifications;