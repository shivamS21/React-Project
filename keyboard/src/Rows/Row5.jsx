import React from 'react'
import TabButton from '../Components/TabButton'
import Button from '../Components/Button'

const Row5 = () => {
  return (
    <div className='flex gap-1.5'>
        <TabButton label={'shift'} position={'start'}/>
        <Button label1={'Z'}/>
        <Button label1={'X'}/>
        <Button label1={'C'}/>
        <Button label1={'V'}/>
        <Button label1={'B'}/>
        <Button label1={'N'}/>
        <Button label1={'M'}/>
        <Button label2={','} label1={'<'}/>
        <Button label2={'.'} label1={'>'}/>
        <Button label2={'/'} label1={'?'}/>
        <TabButton label={'shift'} position={'end'}/>
    </div>
  )
}

export default Row5