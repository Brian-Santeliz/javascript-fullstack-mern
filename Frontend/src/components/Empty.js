import React from 'react';

const Empty = ({title}) => {
    return ( 
        <>
            <div className="bg-white p-5 text-center">
                <h1 className="font-weight-bold text-dark">{title}</h1>
            </div>
        </>
     );
}
 
export default Empty;