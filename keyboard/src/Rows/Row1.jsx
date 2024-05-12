import React from 'react'
import TabButton from '../Components/TabButton'
import Button from '../Components/Button'

const Row1 = () => {
  return (
    <div className='flex gap-1.5'>
        <TabButton label={'esc'} position={'start'}/>
        <Button label2={'F1'} label1={'icon'}/>
        <Button label2={'F2'} label1={'icon'}/>
        <Button label2={'F3'} label1={'icon'}/>
        <Button label2={'F4'} label1={'icon'}/>
        <Button label2={'F5'} label1={'icon'}/>
        <Button label2={'F6'} label1={'icon'}/>
        <Button label2={'F7'} label1={'icon'}/>
        <Button label2={'F8'} label1={'icon'}/>
        <Button label2={'F9'} label1={'icon'}/>
        <Button label2={'F10'} label1={'icon'}/>
        <Button label2={'F11'} label1={'icon'}/>
        <Button label2={'F12'} label1={'icon'}/>
        <Button/>
    </div>
  )
}

export default Row1