import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";
import AddAndUpdateContact from './AddAndUpdateContact';

const Modal = ({ isUpdate, onClose }) => {
  return createPortal(
    <>
        <div className='relative z-50 bg-white min-h-[200px] max-w-[60%] m-auto p-4'>  
            <div className='flex justify-end'>
                <AiOutlineClose onClick={onClose} 
                className='self-end text-2xl'/>
            </div>
            <AddAndUpdateContact isUpdate={isUpdate} onClose={onClose}/>
        </div>
        <div
            onClick={onClose}
            className='absolute top-0 h-screen w-screen backdrop-blur z-40'
        >
        </div>
        
    </>
  , document.getElementById('modal-root'))
}

export default Modal