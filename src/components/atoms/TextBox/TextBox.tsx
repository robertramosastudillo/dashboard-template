import "./TextBox.scss";

export const TextBox = () => {
  return (
    <div className="form__group">
      <label htmlFor="email">Correo Electronico</label>
      <input type="email" placeholder="Ingresa tu correo electronico" />
    </div>
  );
};
