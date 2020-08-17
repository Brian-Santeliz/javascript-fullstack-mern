import React,{Fragment} from 'react';

const Citas = ({datos}) => {

    //when datos is equal a array empty, don't render this component
    if(datos.length === 0) return null
    return ( 
        <Fragment>
            <h1 className="my-5">Administrador de Citas</h1>
             <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <a href="#" className="btn btn-success text-uppercase font-weight-bold px-5 py-2">Crear cita</a>
                    </div>
                    <div className="col-md-8">
                        <div className="list-group">
                            {datos.map(dato=>(
                                <h3 className="mb-4">
                                    {dato.nombre}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
            
        </Fragment>
     );
}
 
export default Citas;