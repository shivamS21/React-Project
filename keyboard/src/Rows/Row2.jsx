import React from 'react'
import Button from '../Components/Button'
import TabButton from '../Components/TabButton'

const Row2 = () => {
  return (
    <div className='flex gap-1.5'>
        <Button label1={'~'} label2={'`'}/>
        <Button label1={'!'} label2={'1'}/>
        <Button label1={'@'} label2={'2'}/>
        <Button label1={'#'} label2={'3'}/>
        <Button label1={'$'} label2={'4'}/>
        <Button label1={'%'} label2={'5'}/>
        <Button label1={'^'} label2={'6'}/>
        <Button label1={'&'} label2={'7'}/>
        <Button label1={'*'} label2={'8'}/>
        <Button label1={'('} label2={'9'}/>
        <Button label1={')'} label2={'0'}/>
        <Button label1={'_'} label2={'-'}/>
        <Button label1={'+'} label2={'='}/>
        <TabButton label={'delete'} position={'end'}/>
    </div>
  )
}

export default Row2