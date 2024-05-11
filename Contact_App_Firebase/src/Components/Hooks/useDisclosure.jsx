import { useState } from 'react';

const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(true);

    const onClose = () => {
        console.log("onClose is hit")
        setIsOpen(false);
    }

    const onOpen = () => {
        console.log("OnOpen is hit")
        setIsOpen(true);
    }
    
    const onUpdate = (value) => {
        setIsUpdate(value);
    }
  return { isOpen, onClose, onOpen, isUpdate, onUpdate }
}

export default useDisclosure