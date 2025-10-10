import React, { useState } from "react";
import emailjs from "emailjs-com";

function Sucursales() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    fecha: "",
    tematica: "",
    tipoDecoracion: "",
    colores: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ukbktfe";
    const templateID = "template_2jsv9ow";
    const userID = "cIYFOf7lunmKkQdNv";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log("Correo enviado!", response.status, response.text);
          alert("¡Gracias! Tu solicitud de cotización ha sido enviada.");
          setFormData({
            nombre: "",
            correo: "",
            fecha: "",
            tematica: "",
            tipoDecoracion: "",
            colores: "",
          });
        },
        (err) => {
          console.error("Error al enviar correo:", err);
          alert("Ocurrió un error al enviar la cotización. Intenta de nuevo.");
        }
      );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h3 style={{ textAlign: "center" }}>Cotiza tu decoración personalizada</h3>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          />
        </label>

        <label>
          Fecha del evento:
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          />
        </label>

        <label>
          Temática del evento:
          <input
            type="text"
            name="tematica"
            value={formData.tematica}
            onChange={handleChange}
            placeholder="Ej. cumpleaños, boda, baby shower"
            required
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          />
        </label>

        <label>
          Tipo de decoración:
          <select
            name="tipoDecoracion"
            value={formData.tipoDecoracion}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          >
            <option value="Arco">Arco</option>
            <option value="Pared">Pared</option>
            <option value="ShimerWall">ShimerWall</option>
            <option value="Otro">Otro</option>
          </select>
        </label>

        <label>
          Colores deseables:
          <input
            type="text"
            name="colores"
            value={formData.colores}
            onChange={handleChange}
            placeholder="Ej. rosa, melocotón, morado"
            style={{ width: "100%", padding: "8px", borderRadius: "6px" }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#fbb6ce",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
          }}
        >
          Enviar Cotización
        </button>
      </form>
    </div>
  );
}

export default Sucursales;
