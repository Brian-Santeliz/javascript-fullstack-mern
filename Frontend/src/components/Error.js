import React from 'react';

const Error = ({msg}) => {
    return ( 
        <div className="alert alert-danger p-4 text-white ">
            <h3 className="text-uppercase text-center mb-3">{msg}</h3>
        </div>
     );
}
 
export default Error;