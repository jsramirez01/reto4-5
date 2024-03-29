import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'



const ActualizarProducto = () => {
    
    const {reference} = useParams();
    //console.log({reference});

    const [ productosActualizar, guardarProductosActualizar] = useState([]);

    fetch(`http://localhost:8080/api/cleaningprod/${reference}`)
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        guardarProductosActualizar(data);
    });
    
    
    const { brand, price, photography, category,quantity,description, } = productosActualizar;
    //console.log(brand)
    
    
    const actualizarProducto = reference =>{
        console.log(reference);

        fetch(`http://localhost:8080/api/cleaningprod/update`, {
        method: "PUT",
        body: reference,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
        
    });

    } 
    
    
    const [ estadoPedido, setEstadoPedido ] = useState(); 
    const formik = useFormik({
        initialValues: {
            reference: "",
            brand: "",
            category: "",
            presentation: "",
            description: "",
            availability: true,
            price: "",
            quantity: "",
            photography:"",
        }, 
        validationSchema: Yup.object({
           reference: Yup.string()
                    .min(3, 'Debes agregar una referencia')
                    .required('La referencia es obligatoria'),
           brand: Yup.string()
                    .min(3, 'Debes agregar una marca')
                    .required('la marca es obligatoria'),
           category: Yup.string()
                    .min(3,'Debes agregar una categoria')
                    .required('la categoria es obligatoria'), 
                    presentation: Yup.string()
                    .min(3, 'Debes agregar una presentacion')
                    .required('La presentacion es obligatoria'),
           description: Yup.string()
                    .min(3, 'Debes agregar una presentacion')
                    .required('La presentacion es obligatoria'),
      
           price: Yup.number()
                    .min(3, 'Debes agregar el precio')
                    .required('El precio es obligatorio'),
           quantity: Yup.number()
                    .min(3, 'Debes agregar la cantidad')
                    .required('Debes agregar el precio'),
           photography: Yup.string()
                    .min(3, 'Debes agregar el link de la fotografia')
                    .required('La fotografia es obligatoria'), 
                        
        }),
        onSubmit: datos => {
          
                console.log(datos);
                fetch(`http://localhost:8080/api/cleaningprod/update`, {
                    method: "PUT",
                    body: datos,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        
                    
                });
        }
     });
    
    
    
    return( 
        <>
           <h1 className="text-3xl font-light mb-4">Actualizar Productos</h1>

           <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    >
                      
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">brand</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="brand"
                                type="text"
                                placeholder="brand " 
                                value={productosActualizar.brand}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}   
                            />
                        </div>
                   

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Category</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                type="text"
                                placeholder="category"
                                value={productosActualizar.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                 

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRESENTACION</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="presentation"
                                type="text"
                                placeholder="Presentacion"
                                value={productosActualizar.presentation}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}    
                            />
                        </div>
                 

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">DESCRIPCION</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                placeholder="Descripcion" 
                                value={productosActualizar.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}      
                            />
                        </div>
                   

                <select
                    className="mt-2 appearance-none bg-blue-600 border border-blue-600 text-white p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold "
                  
                   
                >
                    
                  
                </select>
                    

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">PRECIO</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Precio"
                                value={productosActualizar.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                  

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">CANTIDAD</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="quantity"
                                type="number"
                                placeholder="Cantidad"
                                value={productosActualizar.quantity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                 

                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="photography"
                                type="text"
                                placeholder="Fotografia"
                                value={productosActualizar.photography}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                             
                            />
                        </div>
                   
                   

                   <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Actualizar Producto"
                        />
                       


                     
                    </form>
                </div>
            </div>
       
        </>
     );
}
 
export default ActualizarProducto;