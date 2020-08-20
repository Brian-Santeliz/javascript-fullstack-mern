import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'


const CitaUnique = (props) =>{
    // //if the object the cita is empty, don't render this component.
     if(!props.citaUnica){
      //redirect to component Home
         return null
     }
    const {nombre} = props.citaUnica
    return (
    <Fragment>
    <h1 className="my-4">Nombre Cita: {nombre}</h1>
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
          </div>
    </Fragment>
    )
}
export default withRouter(CitaUnique)