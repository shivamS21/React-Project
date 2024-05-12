import React from 'react'
import Button from '../Buttons/AlphaCharButton'
import TabButton from '../Buttons/MultiPurposeButton'
import Arrow from '../Buttons/ArrowButton'
import Command from '../Buttons/CommandButton'

const Row6 = () => {
  return (
    <div className='flex gap-1.5 flex-grow'>
        <Button label2={'fn'} label1={''} position={'center'}/>
        <Button label2={'control'} label1={'⌃'} position={'end'}/>
        <Button label2={'option'} label1={'⌥'} position={'end'}/>
        <Command label2={'command'} label1={'⌘'} position={'end'}/>
        <TabButton/>
        <Command label2={'command'} label1={'⌘'} position={'start'}/>
        <Button label2={'option'} label1={'⌥'} position={'start'}/>
        <Arrow/>

    </div>
  )
}

export default Row6