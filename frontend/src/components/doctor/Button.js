import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({to}) => {


    return (
        <Link to={`/${to}`}>
             <button className="custom-button">
             {to === '' ? "Patient Portal" : "Patient Records"}
            </button>

        </Link>
           
        
    )
}

export default Button;