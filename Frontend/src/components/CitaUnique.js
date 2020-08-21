import React, { Fragment } from "react";
import Swal from 'sweetalert2'
import { Link, withRouter } from "react-router-dom";
import axios from '../config/axios'

const CitaUnique = (props) => {
  // if the object the cita is empty, don't render this component.
  if (!props.citaUnica) {
    //redirect to component Home, when reload the page in this component
    // props.history.push("/");
    return null;
  }
  const { citaUnica } = props;
  const handleClick = (id)=>{
   try{
    Swal.fire({
      title:'Eliminar',
      text:` ¿Estas seguro en eliminar la cita: ${citaUnica.nombre}?`,
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar'
    }).then(async result=>{
      if(result.value){
        Swal.fire('Eliminado', 'Cita eliminada correctamente!', 'success')
              //delete a cita 
    await axios.delete(`/pacientes/${id}`)
    //update the state to fech and reload the data
    props.setFetch(true)
    //redirect to the component home
    props.history.push('/')

      }
    })
   }catch{
     throw new Error('has been an error the request to delete')
   }
  }
  return (
    <Fragment>
      <h1 className="my-4">Nombre Cita: {citaUnica.nombre}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Link
              to="/"
              className="btn btn-success text-uppercase font-weight-bold px-5 py-2 mb-5"
            >
              Volver a Home
            </Link>
          </div>
        </div>
        <div className="col-md-8 mx-auto list-group">
          <div className="list-group">
            <div className="list-group-item list-group-item-action pt-3">
              <div className="d-flex  justify-content-between mb-4">
                <h3 className="mb-4">{citaUnica.nombre}</h3>
                <span className="fecha-alta">
                  {citaUnica.fecha} - {citaUnica.hora}
                </span>
              </div>
              <h5 className="mb-0 ">Sitomas: {citaUnica.sintomas}</h5>
              <div className="contacto py-3">
                <p>Dueño: {citaUnica.propietario}</p>
                <p>Telefono: {citaUnica.telefono}</p>
              </div>
              <button className="btn btn-danger btn-block font-weight-bold text-uppercase"
              onClick={()=>handleClick(citaUnica._id)}
              >
                Eliminar &times;
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(CitaUnique);
