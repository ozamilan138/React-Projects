import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/milan138')
    //     .then (response => response.json())
    //     .then ((data)=>setData(data))
    // },[])    
  return (
    <div className='bg-gray-500 text-center text-white font-medium m-4 text-2xl' > Github Username :   {data.login}
    <div className='flex justify-center'>
        <img src={data.avatar_url} alt="github-profile" className='w-[200px] p-2 '/>
    </div>
    
    </div>

  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/milan138')
    return response.json()
}