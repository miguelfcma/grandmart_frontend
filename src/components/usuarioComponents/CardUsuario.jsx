import "./CardUsuario.css";
import { useUsuarios } from "./UsuariosContext/UsuarioProvider";

export function CardUsuario({ usuario }) {
  const{ deleteUsuario} = useUsuarios()
  return (
    <div className="card-usuario">
        <div>Id: {usuario.id}</div>
      <div>Nombre: {usuario.nombre}</div>
      <div>Apellido Paterno: {usuario.apellidoPaterno}</div>
      <div>Apellido Materno: {usuario.apellidoMaterno}</div>
      <div>email: {usuario.email}</div>
      <div>
        Tipo Usuario: {usuario.tipoUsuario ? "Usuario admin" : "Usuario común"}
      </div>
      <button className="card-usuario">Editar usuario</button>
      <button className="card-usuario" onClick={() => deleteUsuario(usuario.id)}>
        Eliminar usuario
      </button>
    </div>
  );
}
