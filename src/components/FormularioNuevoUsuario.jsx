import React, { useState } from "react";
import { createUsuarioRequest } from "../API/usuarios.api";

const FormularioNuevoUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos a través de una API o realizar otra acción
    // en función de tus necesidades
    console.log({
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      sexo,
      fechaNacimiento,
      telefono,
      password,
      tipoUsuario,
    });
    const formData = {
      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      email: email,
      sexo: sexo,
      fechaNacimiento: fechaNacimiento,
      telefono: telefono,
      password: password,
      tipoUsuario: tipoUsuario,
    };

    try {
      const response = await createUsuarioRequest(formData);

      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          Nombre:
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="apellidoPaterno">
          Apellido Paterno:
          <input
            type="text"
            id="apellidoPaterno"
            value={apellidoPaterno}
            onChange={(event) => setApellidoPaterno(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="apellidoMaterno">
          Apellido Materno:
          <input
            type="text"
            id="apellidoMaterno"
            value={apellidoMaterno}
            onChange={(event) => setApellidoMaterno(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="sexo">
          Sexo:
          <select
            id="sexo"
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </label>
        <br />
        <label htmlFor="fechaNacimiento">
          Fecha de nacimiento:
          <input
            type="date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(event) => setFechaNacimiento(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="telefono">
          Teléfono:
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          Contraseña:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="tipoUsuario">
          Tipo de usuario:
          <select
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={(event) => setTipoUsuario(event.target.value === "true")}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="true">Administrador</option>
            <option value="false">Usuario regular</option>
          </select>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormularioNuevoUsuario;
