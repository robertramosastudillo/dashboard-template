import { Table } from "../../components/molecules";
import "./Users.scss";

export const Users = () => {
  return (
    <div className="users">
      <h2 className="users__title">Usuarios</h2>

      <Table />
    </div>
  );
};
