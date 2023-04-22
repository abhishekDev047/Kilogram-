import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { BsArrowLeft,BsSend } from "react-icons/bs";
import { useSelector } from 'react-redux';


const Message = ({x, func}) => {
    const mode = useSelector((state)=>state.mode.value);
    // console.log(userId)
    const [items, setItems] = useState([])
    const get = useCallback(async ()=>{
        try{
            const response = await    fetch(`https://dummyapi.io/data/v1/user/`, {
                      headers: {
                        'app-id': '643a4a363ffaaa0219f4ad11'
                      }});
                      const datas = await response.json();
                      setItems(datas.data)
        }
            catch(error){
                console.log(error)
            }                 
    },[]);

useEffect(()=>{
get()
})
// console.log(items)
  return (
    <div className={mode}>
    <div className='flex flex-col text-lg w-full dark:bg-slate-900 dark:text-white pt-3'>
    <div className='flex flex-row mb-1 fixed z-10 top-16 sm:top-20 left-0 bg-slate-400 py-1 dark:bg-gray-950 w-full'>
    <div className='mx-3'>
        <button onClick={func} className='text-lg bg-slate-200 hover:bg-slate-100 px-3 py-1  dark:bg-slate-700'> <BsArrowLeft/>
         </button>
    </div>
    <div>
        {items.map((user, index)=>{

            if(user.id === x){
                return(
                                     <div className='flex flex-row ' key={index}>
            <div className='ml-3'>
                <Image 
                alt='Kologram user'
                height={40}
                width={40}
                src={user.picture}
                className='rounded-full'
                />
            </div>
            <div className='flex flex-col px-3 '>
                    <p className='text-lg'>{user.firstName} {user.lastName}</p>
            </div>
    </div>  
                )
  
            }
            else{
            }
       
        })}
    </div>
    <hr /></div>

    <div className=' h-screen pt-10 sm:pt-8 px-3 w-full'>
        You are not able to send text right now, as i am still working on this site and trying to setting up the chatbot. 
    </div>
    <div className='flex flex-row  bg-white dark:bg-slate-900 fixed bottom-0 right-0 h-40  w-full px-1 ml-10 pb-10'>
        <div className='w-4/5 pl-3 pt-24'>
        <input type="text"  className='w-full px-2 py-1 border  bg-transparent border-black dark:border-white rounded-2xl'/>
    </div>
    <div className='pr-0 flex flex-col items-center w-fit pt-24'>
        <button className='text-2xl my-auto text-blue-900 px-3'><BsSend/> </button>
    </div>
    </div>
    

    </div>
    </div>
  )
}

export default Message