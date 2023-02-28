import { Link } from "react-router-dom";
import { MyRoutes } from "../routes/routes";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li>
          <Link to="/imagenes">imagenes</Link>
        </li>
      </ul>
    </nav>
  );
}
