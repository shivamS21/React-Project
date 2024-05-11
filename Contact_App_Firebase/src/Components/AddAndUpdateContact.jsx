import React from 'react';
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from 'firebase/firestore';
import { db } from './config/firebase';

const AddAndUpdateContact = ( {isUpdate, onClose}) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "Contacts");
            await addDoc(contactRef, contact);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Formik
            initialValues={isUpdate? {
                name:"",
                email:""
            }:{
                name
            }}
            onSubmit={(values) => {
                console.log(values);
                addContact({"Name": values.name, "Email": values.email});
                onClose();
            }}
        >
            <Form className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <Field name="name" className='border h-10 px-2 rounded'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <Field name="email" className='border h-10 px-2 rounded'/>
                </div>
                <button type='submit' className='border bg-blue px-3 py-1.5 mt-2 self-end rounded'>
                    {isUpdate ? "Add": "Edit"} Contact
                </button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddAndUpdateContact