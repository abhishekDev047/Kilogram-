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
    <div className='sm:px-3 left-0  bg-slate-300 sm:h-full flex sm:flex-col fixed sm:w-auto w-full px-2 z-10'>

        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 '>
              <Link href={'/'} className=''> <SiHomeadvisor/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block ' >
        <Link href={'/components/Messages'} as={'/Messages'}>  <SiGooglemessages/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block ' >
        <Link href={'/components/Notifications'} as={'/Notifications'}>  <IoMdNotifications/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block' >
        <Link href={'/components/Userpage'} as={'/Friends'}>  <FaUsers/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block ' >
        <Link href={'/components/Add'} as={'/New Post'}>  <IoMdAddCircle/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block ' >
        <Link href={'/components/Profile'} as={'/Profile'}>  <FaUserAlt/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl  sm:my-4 hover:text-blue-800 mx-2 sm:mx-0 hidden sm:block ' >
        <Link href={'/components/Settings'} as={'/Setting'}>  <IoSettingsSharp/> </Link> 
        </div>


    <div className='mx-5 font-serif sm:hidden block '> Kilogram</div>
        <div className="dropdown sm:hidden block relative flex flex-row w-full justify-end">

        <div className='pr-3 '>
          <button className='text-2xl' onClick={()=>drop === 'hidden' ? setDrop('block') : setDrop('hidden')}>
          {drop==='hidden' ? (<TbLayoutNavbarExpand/>) : (<TbLayoutNavbarCollapse/>)}
           
          </button>
        </div>
         
         </div>
    </div>
            <div className={drop}>
            <div className=' w-fit bg-gray-200 sm:hidden fixed flex flex-col top-9 right-5 z-50 text-xl rounded-lg'>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Messages'} as={'/Messages'}>  <SiGooglemessages/></Link> <p className=' px-4 text-sm'> Messages</p>
                </div>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Notifications'} as={'/Notifications'}>  <IoMdNotifications/> </Link> <p className=' px-4 text-sm'> Notifications</p>
                </div>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Userpage'} as={'/Friends'}>  <FaUsers/> </Link> <p className=' px-4 text-sm'> Friends</p>
                </div>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Add'} as={'/New Post'}>  <IoMdAddCircle/> </Link> <p className=' px-4 text-sm'> New Post</p>
                </div>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Profile'} as={'/Profile'}>  <FaUserAlt/> </Link> <p className=' px-4 text-sm'> Profile</p>
                </div>
                <div className='my-3 ml-3 flex'>
                <Link href={'/components/Settings'} as={'/Setting'}>  <IoSettingsSharp/> </Link> <p className=' px-4 text-sm'> Settings</p>
                </div>
            </div>
          </div>
  </>
  )
}

export default Navbar;