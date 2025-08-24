import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <p className={styles.loading}>Yükleniyor</p>}
      {error && <p className={styles.error}>Hata!!!</p>}
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
