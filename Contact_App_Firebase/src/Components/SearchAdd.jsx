import { CiSearch } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";
import Modal from './Modal';
import Contacts from './Contacts';
import useDisclosure from './Hooks/useDisclosure';

const SearchAdd = () => {
    const {isOpen, onClose, onOpen, isUpdate, onUpdate} = useDisclosure();

  return (
    <>
        <div className='flex gap-2'>
            <div className='relative flex flex-grow items-center'>
                <CiSearch className='absolute ml-1 text-2xl text-white'/>
                <input 
                    type='text'
                    className='h-10 rounded-md flex-grow pl-8 bg-transparent border border-white text-white'
                />
            </div>
            <FaPlusCircle className='text-white text-4xl cursor-pointer' onClick={onOpen}/>
        </div>
        <Contacts onClose={onClose} onOpen={onOpen} isOpen={isOpen} isUpdate={isUpdate} onUpdate={onUpdate}/>
        {/* {isOpen && <Modal onClose={onClose}/>} */}
    </>
    
  )
}

export default SearchAdd