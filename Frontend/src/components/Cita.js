import React from "react";
import { Link } from "react-router-dom";


const Cita = ({ dato }) => {
  return (
    <>
    <Link
      className="list-group-item list-group-item-action  p-5"
      key={dato._id}   
      to={`/cita/${dato._id}`} 
    >
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
      </Link>
    </>
  );
};

export default Cita;
