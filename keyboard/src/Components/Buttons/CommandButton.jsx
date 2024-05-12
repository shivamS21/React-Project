import React from 'react'

const CommandButton = ({label1, label2, position}) => {
  console.log(position);
  return (
  <button className={`bg-black text-white h-[60px] w-[86px]flex flex-col rounded-md p-2`}>
    <div className={`flex ${position === 'end' ? 'justify-end' : 'justify-start'}`}>{label1}</div>
    <div className='flex justify-center'>{label2}</div>
  </button>
  )
}

export default CommandButton