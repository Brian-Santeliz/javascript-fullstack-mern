import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
    return ( 
        <div>
        <h1>Desde About.js</h1>
    <Link to={'/'}>para Home </Link>
        </div>
     );
}
 
export default About;