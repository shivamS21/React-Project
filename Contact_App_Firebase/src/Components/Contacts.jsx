import React, { useEffect, useState } from 'react'
import { db } from './config/firebase';
import { collection, getDocs, onSnapshot }  from 'firebase/firestore';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = ({onClose, onOpen, isOpen, isUpdate, onUpdate}) => {

    const [contacts, setContacts] = useState([]);

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "Contacts", id));
            toast.success("Contact Deleted Successfully!")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const getContacts = async () => {
            try {
                const contactsRef = collection(db, 'Contacts');
                onSnapshot(contactsRef, (snapshot) => {
                    const contactsList = snapshot.docs.map((doc)=>{
                        return {
                            id: doc.id, 
                            ...doc.data()
                        }
                    })
                    console.log(contactsList)
                    setContacts(contactsList);
                    return contactsList
                })
            } catch (error) {
                console.log(error);
            }
        }
        getContacts();
    }, []);

  return (
    <>
        <div className='mt-4 flex flex-col gap-3'>
            {
                contacts.map((contact) => (
                    <div key={contact.id} className='h-[64px] flex p-2 justify-between items-center rounded-lg bg-yellow'>
                        <div className='flex gap-1.5 items-center'>
                            <HiOutlineUserCircle className='text-orange text-4xl cursor-pointer'/>
                            <div>
                                <h1 className='text-[16px] font-medium'>{contact.Name}</h1>
                                <p className='text-[14px]'>{contact.Email}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center text-3xl'>
                            <RiEditCircleLine  onClick={()=>{
                                onOpen();
                                onUpdate(false);
                            }} className='cursor-pointer'/>
                            <MdDelete onClick={ () => deleteContact(contact.id) } className=' text-purple cursor-pointer'/>
                        </div>
                    </div>
                ))
            }
        </div>
        {isOpen && <Modal isUpdate={isUpdate} onClose={onClose}/>}
        <ToastContainer/>
    </>
  )
}

export default Contacts