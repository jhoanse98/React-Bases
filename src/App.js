import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //crear listado de productos
  const [Productos, setProductos] = useState([
    {id:1, nombre:'Camisa', precio:50},
    {id:2, nombre:'Pantalon', precio:70},
    {id:3, nombre:'Zapatos', precio:40},
    {id:4, nombre:'Reloj', precio:90},
  ]);

  const [carrito, agregarProducto] = useState([])
  
  return (
    <div className="App">
        <Header
          titulo="Tienda virtual"
         />
        {Productos.map(producto=>(
          <Producto
            key={producto.id} 
            producto={producto}
            productos={Productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}

        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
    </div>
  );
}

export default App;
