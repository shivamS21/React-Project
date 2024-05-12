import React from 'react'
import Button from '../Components/Button'
import TabButton from '../Components/TabButton'

const Row3 = () => {
  return (
    <div className='flex flex-row gap-1.5'>
        <TabButton label={'tab'} position={'start'}/>
        <Button label1={'Q'}/>
        <Button label1={'W'}/>
        <Button label1={'E'}/>
        <Button label1={'R'}/>
        <Button label1={'T'}/>
        <Button label1={'Y'}/>
        <Button label1={'U'}/>
        <Button label1={'I'}/>
        <Button label1={'O'}/>
        <Button label1={'P'}/>
        <Button label2={'['} label1={'{'}/>
        <Button label2={']'} label1={'}'}/>
        <Button label2={'\\'} label1={'|'}/>
    </div>
  )
}

export default Row3