import React, { useState }from "react";
import { Link } from 'react-router-dom';
import FormularioProductos from "../ui/FormularioProductos";


const Productos = () => {


    const [ productos, guardarProducgos ] = useState([]);

    fetch("http://localhost:8080/api/cleaningprod/all")
    .then((res)=>res.json())
    .then((data) => {
        //console.log(data);
        guardarProducgos(data);

    });

    return(
        <>
        <h1 className="text-3xl font-semibold text-white mb-4">Productos</h1>
        <Link to="/nuevo-producto" className="  bg-red-900 hover:bg-red-600, inline-block mb-5 p-2 text-white uppercase font-bold">
            Agregar Producto
        </Link>
        {productos.map(producto =>(
            <FormularioProductos
            key={producto.reference}
            producto={producto}

            />
        ))}
        </>
        
    )
};

export default Productos;