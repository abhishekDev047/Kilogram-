import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Message from './Message';
import {BsFillSendPlusFill} from 'react-icons/bs';

const Messages = () => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [user, setUser] = useState('');

    const get = useCallback(async ()=>{
        try{
            const response = await    fetch('https://dummyapi.io/data/v1/user', {
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

const change = ()=>{
    setShow(false)
}

if(show === true){
    return(
        <Message x={user} func={change} />
    )
}
else{
     return (
    <>
    <div className=' flex flex-col flex-wrap sm:flex-row '>
{items.map((user, index)=>(
 <div className='flex flex-row p-3 sm:w-5/12 bg-slate-200 rounded-lg m-3' key={index} >
           <div>
                <Image 
                alt='Klogram user'
                height={72}
                width={72}
                src={user.picture}
                className='rounded-3xl'
                />
            </div>
            <div className='flex flex-col px-3'>
                    <p className='text-lg' > {user.firstName}{user.lastName} </p>
                    <p className='text-3xl mt-2'><button className='text-blue-600  hover:text-blue-300 rounded-lg p-2' onClick={()=>{ setUser(user.id),setShow(true)}}> <BsFillSendPlusFill/> </button> </p>
            </div>
    </div>
))}
</div>     
  </>
  )
}
 
};

export default Messages;