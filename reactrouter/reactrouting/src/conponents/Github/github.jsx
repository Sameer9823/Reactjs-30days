import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/sameer9823')
//         .then((res)=>res.json())
//         .then((data)=>{
//             console.log(data);
//             setData(data)
    
//     })
// },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <div className='flex justify-center'>
        <img src={data.avatar_url} alt="github image" />
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sameer9823');

    return response.json();
}