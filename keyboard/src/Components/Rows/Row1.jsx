import React from 'react'
import TabButton from '../Buttons/MultiPurposeButton'
import Button from '../Buttons/AlphaCharButton'

const Row1 = () => {
  const label1 = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12','']
  return (
    <div className='flex gap-1.5'>
        <TabButton label={'esc'} position={'start'}/>
        {label1.map((label, index) => 
          <Button key={index} label2={label} label1={''}/>
        )}
    </div>
  )
}

export default Row1