import FormularioNuevoUsuario from "../components/usuarioComponents/FormNuevoUsuario";
import { Navbar } from "../components/NavBar";
import { ListUsuarios } from "../components/usuarioComponents/ListUsuarios";
import Modal from "../components/Modal/Modal";

import { useEffect, useState } from "react";

export function UsuariosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setFormularioEnviado(false); // Reiniciar el estado del formulario enviado
  }

  function handleSubmit() {
    // Lógica para enviar el formulario
    setFormularioEnviado(true);
  }

  useEffect(() => {
    if (formularioEnviado) {
      handleCloseModal(); // Cerrar la ventana modal si el formulario se ha enviado correctamente
    }
  }, [formularioEnviado]);

  return (
    <>
      <Navbar />

      <ListUsuarios />
      <button onClick={handleOpenModal}>Nuevo registro</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FormularioNuevoUsuario onSubmit={handleSubmit} />
        <button onClick={handleCloseModal}>Cerrar ventana</button>
      </Modal>
    </>
  );
}