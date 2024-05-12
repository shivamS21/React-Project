import React from 'react'
import TabButton from '../Components/TabButton'
import Button from '../Components/Button'

const Row4 = () => {
  return (
    <div className='flex gap-1.5 justify-around'>
        <TabButton label={'caps lock'} position={'start'}/>
        <Button label1={'A'}/>
        <Button label1={'S'}/>
        <Button label1={'D'}/>
        <Button label1={'F'}/>
        <Button label1={'G'}/>
        <Button label1={'H'}/>
        <Button label1={'J'}/>
        <Button label1={'K'}/>
        <Button label1={'L'}/>
        <Button label1={':'} label2={';'}/>
        <Button label1={'"'} label2={"'"}/>
        <TabButton label={'return'} position={'end'}/>

        
    </div>
  )
}

export default Row4