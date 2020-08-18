import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Form = () => {
  return (
    <Fragment>
      <h1 className="my-5">Crea una Cita</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Link
              to="/"
              className="btn btn-success text-uppercase font-weight-bold px-5 py-2 mb-5"
            >
              Volver
            </Link>
          </div>
            <div className="col-md-8 mx-auto">
              <form className="bg-white p-5 bordered">

              </form>
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
