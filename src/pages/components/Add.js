import Image from 'next/legacy/image';
import React, { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from 'react-redux';


const Add = () => {
  const mode = useSelector((state)=>state.mode.value);
  const [post, setPost] = useState(false)
  const [value, setValue] = useState('')

  function previewFile() {
    const preview = document.getElementById("preview");
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const published = ()=>{
      post === false ? setPost(true) : setPost(false)
  }

 if(post === false) {
  return (
  <div className={mode}>
        <div className='flex flex-col flex-wrap dark:bg-slate-900 dark:text-white px-5 items-center pt-4'>
            <div>
            <input type="file" accept="image/*" onChange={previewFile} />
            </div>

            <div>

            <div>
            <Image id="preview" src={''} alt={"Image preview" } height={600} width={800} layout='intrinsic'/>
            </div>

            <div>
                <p>Add Caption here  <button onClick={published}
                className={value === '' ? ' hidden ' : 'text-lg px-2 bg-blue-500 rounded-lg hover:bg-blue-400'}>
                      Post
                </button></p>
                <p> <textarea name="caption" cols="30" rows="10" placeholder='caption is required if you want to post a picture or just a simple quote without a pic.' value={value} onChange={(e)=>setValue(e.target.value)} className='bg-transparent border border-black dark:border-white w-full'>
                </textarea> 
              </p>
            </div>
            </div>
        </div>
   </div>
   )}
   else{
    return(
      <div className={mode}>
      <div className='text-xl text-center dark:bg-slate-900 dark:text-white h-screen pt-5'>
      <button className='bg-slate-300 px-2 float-left dark:bg-slate-600' onClick={published}><BsArrowLeft/></button> <br />
      Congratulations your post has been Published 
      </div></div>
    )
   }
};

export default Add;