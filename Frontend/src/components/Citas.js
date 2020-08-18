import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const Citas = ({ datos }) => {
  //when datos is equal an array empty, don't render this component
  if (datos.length === 0) return null;
  return (
    <Fragment>
      <h1 className="my-5">Administrador de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Link
              to="/form"
              className="btn btn-success text-uppercase font-weight-bold px-5 py-2 mb-5"
            >
               Crear cita
            </Link>
          </div>
          <div className="col-md-8 mx-auto mb-5">
            <div className="list-group">
              {datos.map((dato) => (
                <a
                  href=""
                  className="list-group-item list-group-item-action  p-5"
                  key={dato._id}
                >
                  <div className="d-flex  justify-content-between mb-4">
                    <h3 className="mb-4">{dato.nombre}</h3>
                    <span className="fecha-alta">
                      {dato.fecha} - {dato.hora}
                    </span>
                  </div>
                  <p className="mb-0">{dato.sintomas}</p>
                  <div className="contacto py-3">
                    <p>Dueño: {dato.propietario}</p>
                    <p>Telefono: {dato.telefono}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Citas;
