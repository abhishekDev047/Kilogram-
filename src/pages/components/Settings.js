import React from 'react';
import { IoSettingsSharp} from "react-icons/io5";

const Settings = () => {
  return (
    <div className='flex flex-col'>

    <div className='mb-5'>
    <svg className="animate-spin h-7 w-7 " viewBox=" 0 0 16 16">
      <IoSettingsSharp/>
  </svg>
    </div>

    <div className='flex flex-col md:flex-row flex-wrap'>
      <div>
        Dark Theme <input type='checkbox' id='theme' name='theme' />
      </div>
    </div>
    </div>
  )
}

export default Settings;