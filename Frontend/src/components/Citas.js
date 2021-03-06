import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Empty from './Empty'
import Cita from './Cita'


const Citas = ({ datos }) => {
  //when datos is equal an array empty, don't render this component 
  // if(datos.length === 0) return null
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
              {datos.length === 0 && <Empty title='No hay citas agrega una para comenzar'/>}
              {datos.map(dato => (
                  <Cita
                    dato={dato}
                  />
               ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Citas;
