import Link from 'next/link';
import React from 'react';
import {SiGithub,SiLinkedin,SiInstagram,SiTwitter,SiGmail} from "react-icons/si";


const Contact = () => {
  return (
    <div className='items-center p-5 flex flex-col bg-black text-white'>
    <div className='flex flex-row justify-center items-center p-5 w-full h-full '>
      <Link className='hover:text-blue-700 mx-3 lg:text-2xl text-lg' target='blank' href={'https://github.com/abhishekDev047'}>  <SiGithub/></Link>
      <Link className='hover:text-blue-700 mx-3 lg:text-2xl text-lg' target='blank' href={'https://www.linkedin.com/in/abhishek-kumar-080086241/'}> <SiLinkedin/>  </Link>
      <Link className='hover:text-blue-700 mx-3 lg:text-2xl text-lg' target='blank' href={'https://www.instagram.com/ab_hish_ek_1/'}> <SiInstagram/> </Link>
      <Link className='hover:text-blue-700 mx-3 lg:text-2xl text-lg' target='blank' href={'https://twitter.com/abhishek_dev_47'}> <SiTwitter/> </Link>
    </div>
 <div className='flex flex-row my-auto'>
   <p className='mt-1 mx-2'> <SiGmail/></p> <p>abhishekkumar.in47@gmail.com</p>
 </div>
 <div>
    Check my site <Link href={'https://abhishek-kumar-47.vercel.app/'} target='blank' className='text-blue-700'>Here</Link>
 </div>
    </div>
  )
}

export default Contact;