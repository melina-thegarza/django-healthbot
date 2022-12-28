import React from 'react';
import { Link } from 'react-router-dom';
const UpdateLink = ({to}) => {


    return (
        <Link to={'/update/'+to}>
             <button className="update-link">
             Edit
            </button>

        </Link>
           
        
    )
}

export default UpdateLink;