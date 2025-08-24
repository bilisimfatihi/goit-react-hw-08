import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

import styles from "./ContactsForm.module.css";

const ContactsFrom = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} zaten kayıtlı!`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={styles.input}
        type="tel"
        placeholder="Telefon"
        value={number}
        onChange={(e) => {
          const onlyNums = e.target.value.replace(/\D/g, ""); // sadece rakam
          setNumber(onlyNums);
        }}
        pattern="[0-9]+"
        title="Lütfen sadece rakam giriniz"
        required
      />
      <button className={styles.button} type="submit">
        Ekle
      </button>
    </form>
  );
};

export default ContactsFrom;
