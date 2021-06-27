var datos = {
    nombre:'',
    telefono:'',
    correo: '',
    mensaje:''
}

//Mostrar mensaje de envío correcto
function mostrarMensaje(mensaje) {
    const alerta=document.createElement('p');
    alerta.textContent=mensaje;
    alerta.classList.add('correcto');
    console.log(mensaje);

    formulario.appendChild(alerta);

    setTimeout(function() {
        alerta.remove();
    },5000);
}

//Mostrar error en pantalla
function mostrarError(mensaje) {
    const error=document.createElement('p');
    error.textContent=mensaje;
    error.classList.add('error');
    console.log(mensaje);

    formulario.appendChild(error);

    setTimeout(function() {
        error.remove();
    },5000);
}

function mostrarAlerta(mensaje,error=null) {
    const alerta=document.createElement('p');
    alerta.textContent=mensaje;
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(function() {
        error.remove();
    },5000);
}

function leerTexto(evento) {
    //no es dinámico
    //datos.nombre=evento...
    datos[evento.target.id]=evento.target.value;
    console.log(datos);
}

const nombre=document.querySelector('#nombre');
const telefono=document.querySelector('#telefono');
const correo=document.querySelector('#correo');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario-contacto');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //var {nombre, telefono, correo, mensaje}=datos;
    
    datos.nombre;
    if (datos.nombre==='' || datos.telefono==='' || datos.correo==='' || datos.mensaje==='' ) {
        mostrarError('Todos los campos son obligatorios');
        
        //evita que se ejecute lo demás
        return; 
    }
    // si todos los campos están llenos, no entra al if y no entra al return
   mostrarMensaje("Información enviada correctamente");
});

const botonDarkMode=document.querySelector(".boton-dark-mode");
botonDarkMode.addEventListener('click', activarDarkMode);

function activarDarkMode() {
    const element = document.body;
    const mainContenedor=document.querySelector('main.contenedor');
    element.classList.toggle("dark-mode");
    mainContenedor.classList.toggle("dark-mode");
    mainContenedor.classList.toggle("sombra-dark-mode");
    formulario.classList.toggle("formulario-dark-mode");


}
