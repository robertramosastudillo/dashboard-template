import { TextBox } from "../../atoms";
import "./FormLogin.scss";

export const FormLogin = () => {
  return (
    <div className="form__login">
      {/* <h4>Iniciar Sesión</h4> */}

      <form className="form">
        <TextBox type="email" label="Correo electronico"/>
        <TextBox type="password" label="Contraseña"/>
      </form>
    </div>
  );
};
