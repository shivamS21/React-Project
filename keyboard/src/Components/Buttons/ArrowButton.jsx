import React from 'react'

const ArrowButton = () => {
  return (
    <div className='flex flex-col w-45 items-center'>
        <button className='w-[60px] h-[30px] bg-black text-white rounded-t-md'>▴</button>
        <div className='flex gap-1.5'>
            <button className='w-[60px] h-[30px] bg-black text-white rounded-md'>◂</button>
            <button className='w-[60px] h-[30px] bg-black text-white rounded-b-md'>▾</button>
            <button className='w-[60px] h-[30px] bg-black text-white rounded-md'>▸</button>
        </div>
    </div>
  )
}

export default ArrowButton