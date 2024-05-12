import React from 'react'
import TabButton from '../Buttons/MultiPurposeButton'
import Button from '../Buttons/AlphaCharButton'

const Row5 = () => {
  const letters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const specialChars = [
    { label1: '<', label2: ',' },
    { label1: '>', label2: '.' },
    { label1: '?', label2: '/' }
  ];

  return (
    <div className='flex gap-1.5'>
      <TabButton label={'shift'} position={'start'}/>
      {letters.map((letter, index) => (
        <Button key={index} label1={letter} />
      ))}
      {specialChars.map((char, index) => (
        <Button key={index} label1={char.label1} label2={char.label2} />
      ))}
      <TabButton label={'shift'} position={'end'}/>
    </div>
  )
}

export default Row5
