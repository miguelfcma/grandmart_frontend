import { useState } from "react";
import { createImagenRequest } from "../API/imagenUsuario.api";

function ImageForm() {
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!archivo) {
      setError("El archivo es obligatorio");
      return;
    }

    try {
      const imagen = {
        archivo,
      };

      const response = await createImagenRequest(imagen);

      console.log("Imagen creada:", response.data);

      // Reiniciar los valores del formulario después de enviar la imagen.
      setArchivo(null);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Se ha producido un error al crear la imagen");
    }
  };

  const handleFileChange = (event) => {
    const archivoSeleccionado = event.target.files[0];
    setArchivo(archivoSeleccionado);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="archivo">Archivo:</label>
          <input
            id="archivo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Crear imagen</button>
      </form>
      {archivo && (
        <div>
          <img
            src={URL.createObjectURL(archivo)}
            alt="Imagen seleccionada"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      )}

<img
  src={"http://127.0.0.1:4000/public/avatars/55cad295-6976-4046-a40d-9870c01ef2e8.jpg"}

  alt="Imagen seleccionada"
  style={{ width: "300px", height: "300px" }}
/>

    </>
  );
}

export default ImageForm;
