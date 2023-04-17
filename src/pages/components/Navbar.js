import React from 'react';
import Link from 'next/link';
import { SiHomeadvisor,SiGooglemessages } from "react-icons/si";
import { IoMdNotifications,IoMdAddCircle } from "react-icons/io";
import { IoSettingsSharp} from "react-icons/io5";
import { FaUserAlt,FaUsers } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='sm:px-3 left-0  bg-slate-300 sm:h-full flex sm:flex-col fixed sm:w-auto w-full px-2'>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0'>
              <Link href={'/'} className=''> <SiHomeadvisor/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/'}>  <SiGooglemessages/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/'}>  <IoMdNotifications/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/components/Userpage'} as={'/Friends'}>  <FaUsers/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/components/Add'} as={'new'}>  <IoMdAddCircle/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/'}>  <FaUserAlt/> </Link> 
        </div>
        <div className='text-3xl sm:text-4xl lg:text-5xl sm:my-4 hover:text-blue-800 mx-2 sm:mx-0' >
        <Link href={'/'}>  <IoSettingsSharp/> </Link> 
        </div>
    </div>
  )
}

export default Navbar;