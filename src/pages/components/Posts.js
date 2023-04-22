import Image from 'next/legacy/image';
import React, { useRef } from 'react';
import { AiFillLike
} from "react-icons/ai";
import { useSelector } from 'react-redux';

const Posts = ({first, last, pic, img, likes, date,text}) => {
    const caption = `${first} ${last} : " ${text} "`;
    const myRef = useRef();
    const mode = useSelector((state)=>state.mode.value);
  return (
    <div className={mode}>
    <div className='flex flex-col my-3 w-full mx-auto bg-slate-50 rounded-md dark:bg-gray-950'>
        <div className='flex'><div className='px-3 py-1'> 
        <Image 
            alt='Kilogram user'
            width={40}
            height={40}
            src={pic}
            className='rounded-full'
        /></div>
        <div className='flex flex-col'>
            <p>{first} {last}</p>
            <p className='text-xs'> {date}</p>
        </div>

        </div>
        <div>
            <Image 
             alt='Kilogram user'
             layout='intrinsic'
            width={600}
            height={450}
            src={img}
            className='rounded-sm mx-auto self-center'
        />
        </div>
        <div className='flex flex-col px-3'>
            <div>
                {caption}
            </div>
            <div className="flex">
                <p className='text-xl px-3'ref={myRef}> <button onClick={()=>{myRef.current.color='blue'}}><AiFillLike /></button> {likes}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Posts;