import FormularioNuevoUsuario from "../components/FormularioNuevoUsuario";
import { Navbar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { getUsuariosRequest } from "../API/usuarios.api";
export function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);

  //Apenas entre a esta pagina se ejecutara esta función
  useEffect(() => {
    async function loadUsuarios() {
      const response = await getUsuariosRequest();
      setUsuarios(response);
    }
    loadUsuarios();
  }, []);
  return (
    <>
      <Navbar />
      <FormularioNuevoUsuario />
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h2>{usuario.nombre}</h2>
        </div>
      ))}
    </>
  );
}
