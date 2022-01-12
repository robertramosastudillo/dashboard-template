import styles from "./Button.module.scss";

export const Button = ({ label }: any) => {
  return (
    <button className={styles.button} type="button">
      {label}
    </button>
  );
};
