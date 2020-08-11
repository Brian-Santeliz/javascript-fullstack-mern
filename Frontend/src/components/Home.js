import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {

    return ( 
    <h1>Desde el componente HOme
        <Link to={'/about'}>para about</Link>
    </h1>
     );
}
 
export default Home;