import React from 'react';

const Producto = ({producto, productos, agregarProducto, carrito}) => {

    const {nombre, precio, id} = producto;
    const comprandoProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    return ( 
        <div>
            <p>El nombre del producto es {nombre}</p>
            <p>${precio}</p>
            <button
                type="button"
                onClick = {() => comprandoProducto(id)}
            >
                Comprar
            </button>

        </div>
    );
}
 
export default Producto;