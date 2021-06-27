    // Guardamos las imágenes en un arreglo
    const imagenes = [
        'img/paisaje1.jpg',
        'img/paisaje2.jpg',
        'img/paisaje3.jpg',
        'img/paisaje4.jpg',
        'img/paisaje5.jpg'
    ];

    const INTERVALO = 1000;

    //Definimos una posicion actual para cargar la primera imagen del arreglo
    var posicionActual = 0;
    var btnAtras = document.querySelector('#atras');
    var btnAdelante = document.querySelector('#adelante');
    var imagen = document.querySelector('#imagen');
    //let $botonPlay = document.querySelector('#play');
    //let $botonStop = document.querySelector('#stop');
    var intervalo;

    function cargarImagen (posicionActual) {
        imagen.style.backgroundImage = "url("+imagenes[posicionActual]+")";
    }

    function pasarFoto() {
        //Validamos en caso la posicion actual sea mayor que la cantidad de imagenes
        console.log(imagenes.length);
        console.log(posicionActual);
        if(posicionActual >= imagenes.length-1) {
            posicionActual = 0; //Que vuelva a empezar
        } else { //Si no que avance
            posicionActual++;
        }
        cargarImagen(posicionActual);
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        //Si posicionActual es 0, entonces que vuelva a empezar
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1; //Ahora será el último valor del indice 
        } else {
            posicionActual--; //Si no, que disminuya
        }
        cargarImagen(posicionActual);
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */


    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, INTERVALO);
        // Desactivamos los botones de control
        btnAdelante.setAttribute('disabled', true);
        btnAtras.setAttribute('disabled', true);
        //$botonPlay.setAttribute('disabled', true);
        //$botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        btnAdelante.removeAttribute('disabled');
        btnAtras.removeAttribute('disabled');
        //$botonPlay.removeAttribute('disabled');
        //$botonStop.setAttribute('disabled', true);
    }



    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */


    // Eventos
    btnAdelante.addEventListener('click', pasarFoto);
    btnAtras.addEventListener('click', retrocederFoto);
    //$botonPlay.addEventListener('click', playIntervalo);
    //$botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    cargarImagen(posicionActual);
