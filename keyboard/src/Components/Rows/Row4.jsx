import React from 'react'
import TabButton from '../Buttons/MultiPurposeButton'
import Button from '../Buttons/AlphaCharButton'

const Row4 = () => {
  const letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const specialChars = [
    { label1: ':', label2: ';' },
    { label1: '"', label2: "'" }
  ];

  return (
    <div className='flex gap-1.5 justify-around'>
      <TabButton label={'caps lock'} position={'start'}/>
      {letters.map((letter, index) => (
        <Button key={index} label1={letter} />
      ))}
      {specialChars.map((char, index) => (
        <Button key={index} label1={char.label1} label2={char.label2} />
      ))}
      <TabButton label={'return'} position={'end'}/>
    </div>
  )
}

export default Row4
