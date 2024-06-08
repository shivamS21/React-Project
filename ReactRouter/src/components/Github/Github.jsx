import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <div className='flex flex-col justify-center items-center bg-slate-100'>
        <div>
            Github Followers: {data.followers}
        </div>
        <div><img src={data.avatar_url} alt="github_image"/></div>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/shivamS21');
    // console.log(res.json().then((res) => console.log(res)))
    return res.json();
}