import { useEffect, useState } from "react";
import { getUsuariosRequest } from "../../API/usuarios.api";
import { CardUsuario } from "./CardUsuario";

export function ListUsuarios() {
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
      <ul>
      {usuarios.map((usuario) => (
        <CardUsuario key={usuario.id} usuario={usuario} />
      ))}
    </ul>
    </>
  );
}
