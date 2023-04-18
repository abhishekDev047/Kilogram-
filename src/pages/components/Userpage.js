import React, { useCallback, useEffect, useState } from 'react';
import Users from './Users';

const UserPage = () => {
    const [items, setItems] = useState([])

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

// useEffect(() => {
// console.log(items);
// }, [items]);
return (
<div className=' flex flex-col flex-wrap sm:flex-row '>
{items.map((user, index)=>(
<Users first={user.firstName} last={user.lastName} title={user.title} pic={user.picture} key={index} />
))}
</div>
)
}

export default UserPage;