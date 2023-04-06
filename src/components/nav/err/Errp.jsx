import React from 'react';
import { Link } from 'react-router-dom';


const Errp = () => {
    return (
        <div>
            <div>
                <h1>404</h1>
                <p>the page dose not exist</p>
                <Link to="/">go back</Link>
            </div>
        </div>
    );
};

export default Errp;