import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams();
  return (
    <div className='bg-gray-200 text-red text-2xl'>User: {userid}</div>
  )
}

export default User