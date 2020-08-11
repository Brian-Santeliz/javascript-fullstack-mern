import React from "react";
import {Link} from 'react-router-dom'

const AboutDinamic = (props) => {
  const ejemplo = props.match.params.id;
  return (
    <>
      <h1>Desde about dinamico, con el id: {ejemplo}</h1>
        <Link to={"/"}>Volver</Link> 
    </>
  );
};

export default AboutDinamic;
