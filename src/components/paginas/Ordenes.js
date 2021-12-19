import React from "react";
import { Link } from 'react-router-dom';



const Ordenes = () => {
    return( 
        <>
            
                <h1 className="text-3xl font-semibold text-white mb-4">Ordenes</h1>
                <Link to="/nueva-orden" className="  bg-red-900 hover:bg-red-600, inline-block mb-5 p-2 text-white uppercase font-bold">
                    Agregar Orden
                </Link>
            
        </>
    )
};

export default Ordenes;