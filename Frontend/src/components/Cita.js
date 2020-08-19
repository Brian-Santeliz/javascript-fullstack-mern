import React from "react";

const Cita = ({ dato }) => {
  return (
    <>
      <div className="d-flex  justify-content-between mb-4">
        <h3 className="mb-4">{dato.nombre}</h3>
        <span className="fecha-alta">
          {dato.fecha} - {dato.hora}
        </span>
      </div>
      <h5 className="mb-0 ">Sintomas: {dato.sintomas}</h5>
      <div className="contacto py-3">
        <p>Dueño: {dato.propietario}</p>
        <p>Telefono: {dato.telefono}</p>
      </div>
    </>
  );
};

export default Cita;
