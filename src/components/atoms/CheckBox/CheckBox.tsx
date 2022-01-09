import "./CheckBox.scss";

export const CheckBox = ({ label }: any) => {
  return (
    <div className="checkbox">
      <input type="checkbox" name="check" id="check" />
      <label htmlFor="check">{label}</label>
    </div>
  );
};
