import React,{Fragment} from 'react';

const Citas = ({datos}) => {

    //when datos is equal a array empty, don't render this component
    if(datos.length === 0) return null
    return ( 
        <Fragment>
            <h1 className="">Administraodor de Citas</h1>
                <div className="container mt-5 py-5">
                    <div className="row">
                      <div className="col-md-12 d-flex-justify-content-center">
                          <a href="#" className="btn btn-success text-uppercase font-weight-bold">Crar cita</a>
                      </div>
                    </div>
                </div>
            
        </Fragment>
     );
}
 
export default Citas;