// Declaración de una lista vacía para almacenar productos y un contador
let listaProductos = [];
var idcount = 0;

// Objeto que sirve como plantilla para representar un producto
const objProducto = {
    id: "",
    nombre: "",
    precio: "",
    inventario: "",
    totalIva: ""
}

// Variable de control para saber si se está editando un producto
let editando = false;

// Selección de elementos del DOM
const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const precioInput = document.querySelector("#precio");
const inventarioInput = document.querySelector("#inventario");
const totalIvaInput = document.querySelector("#totaliva");
const btnAgregar = document.querySelector("#btnAgregar");

// Manejo del evento de envío del formulario
formulario.addEventListener('submit', validarformulario);

// Función que valida el formulario al enviar
function validarformulario(e) {
    e.preventDefault();

    // Verifica que todos los campos del formulario estén completos
    if (nombreInput.value === '' || precioInput.value === '' || inventarioInput.value === '' || totalIvaInput.value === '') {
        alert('Todos los campos son obligatorios');
        return;
    }

    // Si se está editando, llama a la función de edición; de lo contrario, agrega un nuevo producto
    if (editando) {
        editarProducto();
        editando = false;
    } else {
        // Asigna un identificador único y los valores del formulario al objeto de producto
        objProducto.id = `Ref ${idcount + 1}`;
        objProducto.nombre = nombreInput.value;
        objProducto.precio = precioInput.value;
        objProducto.inventario = inventarioInput.value;
        objProducto.totalIva = totalIvaInput.value;

        // Llama a la función para agregar el producto a la lista
        agregarProducto();
    }

    // Incrementa el contador de identificadores
    idcount += 1;
}

// Función que agrega un producto a la lista
function agregarProducto() {
    // Clona el objeto de producto y lo agrega a la lista
    listaProductos.push({ ...objProducto });

    // Muestra la lista de productos en el DOM
    mostrarProductos();

    // Resetea el formulario y limpia el objeto de producto
    formulario.reset();
    limpiarObjeto();
}

// Función que limpia el objeto de producto
function limpiarObjeto() {
    objProducto.id = '';
    objProducto.nombre = '';
    objProducto.precio = '';
    objProducto.inventario = '';
    objProducto.totalIva = '';
}

// Función que muestra la lista de productos en el DOM
function mostrarProductos() {
    // Limpia el contenido HTML anterior
    limpiarHTML();

    // Selecciona el contenedor de productos en el DOM
    const divProductos = document.querySelector(".div-productos");

    // Crea una tabla y le agrega estilos
    const tabla = document.createElement('table');
    tabla.classList.add('tabla-productos');

    // Definición de encabezados de la tabla
    const encabezados = ['Serie P', 'Producto', 'Precio', 'Inventario', 'Total IVA'];
    const encabezadosRow = document.createElement('tr');

    // Crea celdas de encabezado y las agrega a la fila
    encabezados.forEach(encabezado => {
        const th = document.createElement('th');
        th.textContent = encabezado;
        encabezadosRow.appendChild(th);
    });

    // Agrega la fila de encabezados a la tabla
    tabla.appendChild(encabezadosRow);

    // Itera sobre la lista de productos para crear filas de datos
    listaProductos.forEach(producto => {
        const { id, nombre, precio, inventario, totalIva } = producto;
        const fila = document.createElement('tr');

        // Crea celdas de datos y las agrega a la fila
        const columnas = [id, nombre, precio, inventario, totalIva];
        columnas.forEach(columna => {
            const td = document.createElement('td');
            td.textContent = columna;
            fila.appendChild(td);
        });

        // Crea celda de acciones (Editar y Eliminar) y las agrega a la fila
        const acciones = document.createElement('td');

        // Botón de editar
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarProducto(producto);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        acciones.appendChild(editarBoton);

        // Botón de eliminar
        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarProducto(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        acciones.appendChild(eliminarBoton);

        // Agrega la celda de acciones a la fila
        fila.appendChild(acciones);

        // Agrega la fila a la tabla
        tabla.appendChild(fila);
    });

    // Agrega la tabla al contenedor de productos en el DOM
    divProductos.appendChild(tabla);
}

// Función que limpia el contenido HTML del contenedor de productos
function limpiarHTML() {
    const divProductos = document.querySelector(".div-productos");

    // Elimina todos los hijos del contenedor
    while (divProductos.firstChild) {
        divProductos.removeChild(divProductos.firstChild);
    }
}

// Función que carga los datos de un producto en el formulario para su edición
function cargarProducto(producto) {
    const { id, nombre, precio, inventario, totalIva } = producto;

    // Llena los campos del formulario con los datos del producto seleccionado
    nombreInput.value = nombre;
    precioInput.value = precio;
    inventarioInput.value = inventario;
    totalIvaInput.value = totalIva;

    // Asigna el identificador del producto al objeto de producto
    objProducto.id = id;

    // Cambia el texto del botón de enviar formulario a "Actualizar"
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    // Establece la bandera de edición a true
    editando = true;
}

// Función que edita un producto en la lista
function editarProducto() {
    // Actualiza los valores del objeto de producto con los datos del formulario
    objProducto.nombre = nombreInput.value;
    objProducto.precio = precioInput.value;
    objProducto.inventario = inventarioInput.value;
    objProducto.totalIva = totalIvaInput.value;

    // Busca el producto correspondiente en la lista y actualiza sus propiedades
    listaProductos.map(producto => {
        if (producto.id === objProducto.id) {
            producto.id = objProducto.id;
            producto.nombre = objProducto.nombre;
            producto.precio = objProducto.precio;
            producto.inventario = objProducto.inventario;
            producto.totalIva = objProducto.totalIva;
        }
    });

    // Limpia el contenido HTML anterior y muestra la lista actualizada
    limpiarHTML();
    mostrarProductos();

    // Resetea el formulario y cambia el texto del botón de enviar a "Agregar"
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = "Agregar";

    // Establece la bandera de edición a false
    editando = false;
}

// Función que elimina un producto de la lista
function eliminarProducto(id) {
    // Filtra la lista de productos excluyendo el producto con el identificador proporcionado
    listaProductos = listaProductos.filter(producto => producto.id !== id);

    // Limpia el contenido HTML anterior y muestra la lista actualizada
    limpiarHTML();
    mostrarProductos();
}
