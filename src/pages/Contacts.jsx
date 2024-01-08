import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectContacts } from '../redux/contacts/selectors';
import ContactForm from '../components/Form/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/filter';
import css from './Contacts.module.css';

export default function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (

        <div className={css.div}>
            {isLoading && <p>Request in progress...</p>}
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            {contacts.length > 0 && <ContactList />}
        </div>
    )
}