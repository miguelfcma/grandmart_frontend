import { Link } from "react-router-dom";

export function CardUsuario({ usuario }) {
  return (
    <li>
      <div>Nombre: {usuario.nombre}</div>
      <div>Apellido Paterno: {usuario.apellidoPaterno}</div>
      <div>Apellido Materno: {usuario.apellidoMaterno}</div>
      <div>email: {usuario.email}</div>
      <div>Tipo Usuario: {usuario.tipoUsuario ? 'Usuario admin' : 'Usuario común'}</div>

    </li>
  );
}
