
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './contactform.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [formData, setFormData] = useState({ name: '', number: '' });

  const inputChange = (event) => {
    const { name, value } = event.currentTarget;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isDuplicate = formData.name && contacts.some((contact) => contact.name === formData.name);

    if (isDuplicate) {
      alert(`${formData.name} is already in contacts`);
      reset();
    } else {
      dispatch(addContact(formData));
      reset();
    }
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.div}>
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.name}>Name</label>
      <input className={css.input} onChange={inputChange} type="text" name="name" value={formData.name} />
      <label className={css.name}>Number</label>
      <input className={css.input} onChange={inputChange} type="tel" name="number" value={formData.number} />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
      </form>
      </div>
  );
};

export default ContactForm;





  

    

 
  
