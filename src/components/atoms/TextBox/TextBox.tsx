import "./TextBox.scss";

interface Props {
  type?: string;
  label: string;
}

export const TextBox = ({ type = 'text', label }: Props) => {
  return (
    <>
      <div className="form__group">
        <input type={type} className="form__input" placeholder=" " />
        <label htmlFor="" className="form__label">
          {label}
        </label>
      </div>
    </>
  );
};
