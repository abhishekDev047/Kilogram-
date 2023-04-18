import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsArrowLeft,BsSend } from "react-icons/bs";


const Message = ({x, func}) => {
    const userId = useSelector(state =>{state.userId});
    console.log(userId)
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
console.log(items)
  return (
    <div className='flex flex-col text-lg w-full'>
    <div className='flex flex-row mb-1 '>
    <div className='mx-3'>
        <button onClick={func} className='text-lg bg-slate-200 hover:bg-slate-100 px-3 py-1 '> <BsArrowLeft/>
         </button>
    </div>
    <div>
        {items.map((user, index)=>{

            if(user.id === x){
                return(
                                     <div className='flex flex-row '>
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
    </div><hr />

    <div>
        You are not able to send text right now, as i am still working on this site and trying to setting up the chatbot. 
    </div>
    <div className='flex flex-row fixed bg-white w-full sm:w-[90.9%] md:w-[91%] lg:w-[93%] overflow-hidden ml-10 bottom-0 right-0'>
        <div className='w-4/5 pl-3'>
        <input type="text"  className='w-full px-2 py-1 border border-slate-400 rounded-2xl'/>
    </div>
    <div className='ml-3'>
        <button className='text-xl my-auto text-blue-900'><BsSend/> </button>
    </div>
    </div>
    

    </div>
  )
}

export default Message