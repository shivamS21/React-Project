import React from 'react'
import Button from '../Components/Button'
import TabButton from '../Components/TabButton'
import Arrow from '../Components/Arrow'
import Command from '../Components/Command'

const Row6 = () => {
  return (
    <div className='flex gap-1.5 flex-grow'>
        <Button label2={'b'} label1={'fn'} position={'end'}/>
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