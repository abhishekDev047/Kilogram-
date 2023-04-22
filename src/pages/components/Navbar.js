import React, { useState } from 'react';
import Link from 'next/link';
import { SiHomeadvisor,SiGooglemessages } from "react-icons/si";
import { IoMdNotifications,IoMdAddCircle } from "react-icons/io";
import { IoSettingsSharp} from "react-icons/io5";
import { FaUserAlt,FaUsers } from "react-icons/fa";
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse } from "react-icons/tb";

const Navbar = () => {
 const [drop, setDrop] = useState('hidden')  
  return (
    <>
    <div className='sm:px-3 bg-slate-300  flex  fixed left-0 w-full px-2 z-10 h-16 sm:h-20'>

        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  '>
              <Link href={'/'} className=''> <SiHomeadvisor/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block ' >
        <Link href={'/components/Messages'} as={'/Messages'}>  <SiGooglemessages/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block ' >
        <Link href={'/components/Notifications'} as={'/Notifications'}>  <IoMdNotifications/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block' >
        <Link href={'/components/Userpage'} as={'/Friends'}>  <FaUsers/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block ' >
        <Link href={'/components/Add'} as={'/New Post'}>  <IoMdAddCircle/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block ' >
        <Link href={'/components/Profile'} as={'/Profile'}>  <FaUserAlt/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  m-auto hover:text-blue-800 mx-2  hidden sm:block ' >
        <Link href={'/components/Settings'} as={'/Setting'}>  <IoSettingsSharp/> </Link> 
        </div>


    <div className='mx-5 font-serif sm:hidden block my-auto'> Kilogram</div>
        <div className="dropdown sm:hidden block relative flex flex-row w-full justify-end">

        <div className='pr-3 h-full flex items-start'>
          <button className='text-2xl my-auto' onClick={()=>drop === 'hidden' ? setDrop('block') : setDrop('hidden')}>
          {drop==='hidden' ? (<TbLayoutNavbarExpand/>) : (<TbLayoutNavbarCollapse/>)}
           
          </button>
        </div>
         
         </div>
    </div>
            <div className={drop}>
            <div className=' w-fit bg-gray-200 sm:hidden fixed flex flex-col top-11 right-5 z-50 text-xl rounded-lg'>
                <div className='my-3 ml-3'>
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Messages'} as={'/Messages'} className=' flex flex-row items-center'> <p><SiGooglemessages/></p>  <p className=' px-4 text-sm '> Messages</p></Link></button>
                </div>
                <div className='my-3 ml-3'> 
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Notifications'} as={'/Notifications'} className=' flex flex-row items-center'>   <p><IoMdNotifications/></p> <p className=' px-4 text-sm'> Notifications</p></Link> </button>
                </div>
                <div className='my-3 ml-3 '> 
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Userpage'} as={'/Friends'} className=' flex flex-row items-center'>   <p><FaUsers/></p>  <p className=' px-4 text-sm'> Friends</p></Link></button>
                </div>
                <div className='my-3 ml-3 '> 
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Add'} as={'/New Post'} className=' flex flex-row items-center'>   <p><IoMdAddCircle/> </p> <p className=' px-4 text-sm'> New Post</p></Link></button>
                </div>
                <div className='my-3 ml-3 '> 
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Profile'} as={'/Profile'} className=' flex flex-row items-center'>   <p><FaUserAlt/></p>  <p className=' px-4 text-sm'> Profile</p></Link></button>
                </div>
                <div className='my-3 ml-3 '> 
                <button onClick={()=>setDrop('hidden')}>
                <Link href={'/components/Settings'} as={'/Setting'} className=' flex flex-row items-center'>   <p><IoSettingsSharp/></p>  <p className=' px-4 text-sm'> Settings</p></Link></button>
                </div>
            </div>
          </div>
  </>
  )
}

export default Navbar;