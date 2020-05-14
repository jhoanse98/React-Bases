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

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id)
        agregarProducto(productos)
    }

    return ( 
        <div>
            <p>El nombre del producto es {nombre}</p>
            <p>${precio}</p>
            {productos 
            ?
                (
                    <button
                        type="button"
                        onClick = {() => comprandoProducto(id)}
                    >
                        Comprar
                    </button>
                )
            :
                (
                    <button
                        type="button"
                        onClick = {() => eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
                )
            }

        </div>
    );
}
 
export default Producto;