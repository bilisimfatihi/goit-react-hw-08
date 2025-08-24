import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Phonebook App</h1>
      <p>This is the home page. Please register or login to continue.</p>
    </div>
  );
};

export default HomePage;
