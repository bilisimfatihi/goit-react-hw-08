import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <button
        className={styles.button}
        onClick={() => {
          handleDelete(contact.id);
        }}
      >
        Sil
      </button>
    </div>
  );
};

export default Contact;
