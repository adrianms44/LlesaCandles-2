/*
=========================================
LLESA CANDLES
Archivo: script.js
Versión: 1.0
Última actualización: 04/07/2026
=========================================
*/


// AQUÍ PODRÁS AÑADIR
// ANIMACIONES
// MENÚ MÓVIL
// GALERÍAS
// CARRITO
// ETC.

function filtrar(tipo){

    // Obtener todos los productos
    const productos = document.querySelectorAll('.producto');

    // Obtener todos los botones
    const botones = document.querySelectorAll('.filtro');
    const tituloWax = document.getElementById('titulo-wax');
    const tituloVela = document.getElementById('titulo-vela');

    // Quitar clase activa a todos
    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    // Activar el botón pulsado
    event.target.classList.add('activo');

    // Filtrar productos
    productos.forEach(producto => {

        if(tipo === 'todos'){
            producto.style.display = 'block';
        }
        else if(producto.classList.contains(tipo)){
            producto.style.display = 'block';
        }
        else{
            producto.style.display = 'none';
        }

    });
    
    // Mostrar u ocultar títulos

    if(tipo === 'todos'){

        tituloWax.style.display = 'block';
        tituloVela.style.display = 'block';

    }

    else if(tipo === 'wax'){

        tituloWax.style.display = 'block';
        tituloVela.style.display = 'none';

    }

    else if(tipo === 'vela'){

        tituloWax.style.display = 'none';
        tituloVela.style.display = 'block';

    }

}