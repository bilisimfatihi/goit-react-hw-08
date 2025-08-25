import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectisLoading,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectisLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>Error!!!</p>}
      <ul className={styles.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
