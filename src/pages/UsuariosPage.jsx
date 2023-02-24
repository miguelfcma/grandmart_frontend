import FormularioNuevoUsuario from "../components/usuarioComponents/FormNuevoUsuario";
import { Navbar } from "../components/NavBar";
import { ListUsuarios } from "../components/usuarioComponents/ListUsuarios";
export function UsuariosPage() {

  return (
    <>
      <Navbar />
      <FormularioNuevoUsuario />
      <ListUsuarios/>
    </>
  );
}
