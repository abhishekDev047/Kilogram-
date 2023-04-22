import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";

const Profile = () => {
  const mode = useSelector((state)=>state.mode.value);
  const [show, setShow] = useState('hidden');
  const [show1, setShow1] = useState('hidden');
  const [userName, setName] = useState('Your Name');
  const [about, setAbout] = useState('About your self');
  return (
    <div className={mode}>
    <div className='flex flex-col w-full items-center px-3 py-5 dark:bg-slate-900 dark:text-white'>


    <div>
        <Image 
            src={'/images/profile.JPG'}
            height={600}
            width={600}
            alt='user Profile'
            className='rounded-full'
            layout='intrinsic'
        />
    </div>

    <div className='text-center text-lg '>
        <p> {userName} <button onClick={()=>{show==='hidden' ? setShow('block'): setShow('hidden')}}><AiFillEdit/></button></p>
        <p className={show}>
         <span>
          <input type="text" className='bg-transparent border dark:border-white border-black px-2 py-1' 
          onChange={e=>setName(e.target.value)}/>
          <button className='text-gray-600 text-xl' onClick={()=>{setShow('hidden')}}> <BiMessageSquareAdd/>
          </button>
         </span>
        </p>
        <p>{about} <button onClick={()=>{show1==='hidden' ? setShow1('block'): setShow1('hidden')}}><AiFillEdit/></button></p>
        <p className={show1}>
         <span>
          <textarea  type="text" className='bg-transparent border dark:border-white border-black px-2 py-1' 
          onChange={e=>setAbout(e.target.value)}/>
          <button className='text-gray-600 text-xl' onClick={()=>{setShow1('hidden')}}> <BiMessageSquareAdd/>
          </button>
         </span>
        </p>
    </div>
    </div>
    </div>
  )
}

export default Profile;