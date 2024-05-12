import React from 'react'
// button can be used for Tab, delete esc 


const MultiPurposeButton = (props) => {
    const {label, position} = props;
    const positionClass = (position === 'start') ? 'justify-end' : 'justify-end items-end';
    let buttonWidth = '94.5px'; // default width for esc, tab and delete button
    if (label === 'caps lock' || label == 'return') buttonWidth = '110px';
    else if (label === 'shift') buttonWidth = '143px';
    else if (!label) buttonWidth = '305px';

  return (
    <button className={`bg-black text-white h-[60px] flex flex-col ${positionClass} rounded-md p-2`} style={{width: buttonWidth}}>
        {label}
    </button>
  )
}

export default MultiPurposeButton