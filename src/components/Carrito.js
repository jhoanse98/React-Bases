import React from 'react';
import './Carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>bienvenido a tu carrito de compras</h2>

        {carrito.length ===0
        ?
            <h3>No hay elementos en el carrito</h3>
        : carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />

        ))
        }

         
    </div>
  );

 
export default Carrito;