import LoginForm from "../../components/LoginForm/LoginForm";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login Page</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
