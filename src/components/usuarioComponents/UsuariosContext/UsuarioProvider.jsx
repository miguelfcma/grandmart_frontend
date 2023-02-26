import { useContext, useState, useEffect } from "react";

import {
  getUsuariosRequest,
  createUsuarioRequest,
  deleteUsuarioRequest,
  updateUsuarioRequest,
} from "../../../API/usuarios.api";

import { UsuarioContext } from "./UsuarioContext";

export const useUsuarios = () => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error("useUsuarios must be used within a UsuarioContextProvider");
  }
  return context;
};

export const UsuarioContextProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  async function loadUsuarios() {
    try {
      const response = await getUsuariosRequest();
      if (response === undefined) {
        throw new Error("No se pudo obtener la lista de usuarios");
      }
      setUsuarios(response);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteUsuario = async (id) => {
    try {
      const response = await deleteUsuarioRequest(id);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createUsuario = async (usuario) => {
    try {
      const response = await createUsuarioRequest(usuario);
      console.log(response);
      console.log("Hola en porvider");
      if (response.status == 201) {
        setUsuarios([...usuarios, usuario]);

      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUsuario = async (id, usuario) => {
    try {
      const response = await updateUsuarioRequest(id, usuario);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        loadUsuarios,
        deleteUsuario,
        createUsuario,
        updateUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
