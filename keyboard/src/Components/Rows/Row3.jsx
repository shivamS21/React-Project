import React from 'react'
import Button from '../Buttons/AlphaCharButton'
import TabButton from '../Buttons/MultiPurposeButton'

const Row3 = () => {
  const labels = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const specialChars = [
    { label2: '[', label1: '{' },
    { label2: ']', label1: '}' },
    { label2: '\\', label1: '|' }
  ];

  return (
    <div className='flex flex-row gap-1.5'>
      <TabButton label={'tab'} position={'start'}/>
      {labels.map((label, index) => (
        <Button key={index} label1={label} />
      ))}
      {specialChars.map((char, index) => (
        <Button key={index} label1={char.label1} label2={char.label2} />
      ))}
    </div>
  )
}

export default Row3
