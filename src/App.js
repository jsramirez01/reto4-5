import React from "react";
import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Usuarios from './components/paginas/Usuarios';
import Productos from './components/paginas/Productos';

import DetalleUsuarios from "./components/paginas/DetalleUsuarios";
import DetalleOrdenes from "./components/paginas/DetalleOrdenes";
import DetalleProductos from "./components/paginas/DetalleProductos";

import Sidebar from './components/ui/Sidebar';




function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w-2/5 xl:w-4/5 p-6 bg-gray-800">
     
       <Routes>
                <Route path="/" element={<Ordenes />  } />
                <Route path="/usuarios" element={<Usuarios />  } />
                <Route path="/productos" element={<Productos />  } />
                <Route path="/nueva-orden" element={<DetalleOrdenes />}/>
                <Route path="/nuevo-producto" element={<DetalleProductos />}/>
                <Route path="/nuevo-usuario" element={<DetalleUsuarios />}/>

      </Routes>
      </div>
    </div>
  );
}

export default App;
