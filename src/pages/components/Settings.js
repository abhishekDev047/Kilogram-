import React from 'react';
import { IoSettingsSharp} from "react-icons/io5";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Settings = () => {
  const mode = useSelector((state)=>state.mode.value);
  return (
    <div className={mode}>
    <div className='flex flex-col pt-5 dark:bg-slate-900 dark:text-white px-2'>

    <div className='mb-5'>
    <svg className="animate-spin h-7 w-7  dark:text-gray-400" viewBox=" 0 0 16 16">
      <IoSettingsSharp/>
  </svg>
    </div>

    <div className='flex flex-col h-screen flex-wrap text-center'>
      <div className='flex flex-col items-center'>
        currently here is nothing
        <br /> <span className='mt-10 text-4xl text-yellow-400 bg-black rounded-full'> <BsFillEmojiFrownFill/> </span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Settings;