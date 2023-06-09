import { useState,useEffect, useCallback } from "react";
import Posts from "./Posts";
import Head from "next/head";


useState
const HomePage = () => {

    <Head> <title>Kilogram- connect with peoples</title></Head>

    const [items, setItems] = useState([]);

    const get = useCallback( async ()=>{
        try{
            const response = await    fetch('https://dummyapi.io/data/v1/post', {
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
    });
    // useEffect(() => {  
    //     console.log(items);
    //     }, [items]);
 return(
    <div className=" flex flex-col items-center  px-2 py-1">
     {items.map((item,index)=>(
        <Posts key={index} pic={item.owner.picture} first={item.owner.firstName} last={item.owner.lastName} likes={item.likes} img={item.image} text={item.text} date={item.publishDate} />
       ))}
    </div>
 )
}

export default HomePage ;