import styles from "./CheckBox.module.scss";

export const CheckBox = ({ label }: any) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name="check" id="check" />
      <label htmlFor="check">{label}</label>
    </div>
  );
};
