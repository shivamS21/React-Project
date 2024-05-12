import React from 'react'
import Button from '../Buttons/AlphaCharButton'
import TabButton from '../Buttons/MultiPurposeButton'

const Row2 = () => {
  const labelPairs = [
    { label1: '~', label2: '`' },
    { label1: '!', label2: '1' },
    { label1: '@', label2: '2' },
    { label1: '#', label2: '3' },
    { label1: '$', label2: '4' },
    { label1: '%', label2: '5' },
    { label1: '^', label2: '6' },
    { label1: '&', label2: '7' },
    { label1: '*', label2: '8' },
    { label1: '(', label2: '9' },
    { label1: ')', label2: '0' },
    { label1: '_', label2: '-' },
    { label1: '+', label2: '=' }
  ];

  return (
    <div className='flex gap-1.5'>
      {labelPairs.map((pair, index) => (
        <Button key={index} label1={pair.label1} label2={pair.label2} />
      ))}
      <TabButton label={'delete'} position={'end'} />
    </div>
  )
}

export default Row2
