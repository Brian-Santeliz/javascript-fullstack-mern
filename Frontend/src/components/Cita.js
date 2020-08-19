import React from 'react';

const Cita = ({dato}) => {
    return ( <>
                <a
                  href=""
                  className="list-group-item list-group-item-action  p-5"
                 
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
              ))
    </> );
}
 
export default Cita;