import "./Button.scss";

export const Button = ({ label }: any) => {
  return (
    <button className="button" type="button">
      {label}
    </button>
  );
};
