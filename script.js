var juegosDisponibles = [
    { nombre: "Bloodletting", imagen: "/img/BloodlettingNoReleased.png", enlace: "/game1.html" },
    { nombre: "60 Seconds", imagen: "/img/60SecondsNoReleased.png", enlace: "/game2.html" },
    { nombre: "Voxeland", imagen: "/img/VoxelandInDev.png", enlace: "/game3.html" }
    // Puedes agregar más juegos aquí si es necesario
];





function submitSearch(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Capturar el valor ingresado por el usuario
    var searchTerm = document.getElementById("search-input").value;

    // Almacenar el término de búsqueda en el almacenamiento local
    localStorage.setItem("searchTerm", searchTerm);

    // Filtrar los juegos disponibles según el término de búsqueda
    var juegosFiltrados = juegosDisponibles.filter(function(juego) {
        return juego.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Almacenar los juegos filtrados en el almacenamiento local
    localStorage.setItem("searchResults", JSON.stringify(juegosFiltrados));

    // Redirigir a la página de búsqueda
    window.location.href = "/search.html";
}

var isMoved = true;

function showSearchbar() {

    var searchBar = document.getElementById('searchBar');
    var showSearchbarIcon = document.getElementById('showSearchbarIcon')

    if (!isMoved) {
        searchBar.style.display = 'none'
        showSearchbarIcon.style.transform = 'rotate(0deg)'
    } else {
        searchBar.style.display = 'flex';
        showSearchbarIcon.style.transform = 'rotate(180deg)'
    }

    isMoved = !isMoved; // Invertimos el estado para el próximo clic
}


document.addEventListener('DOMContentLoaded', function () {

    const mainMedia = document.querySelector('.main-image');
    const media2 = document.querySelector('#image-2');
    const media3 = document.querySelector('#image-3');
    const media4 = document.querySelector('#image-4');
    const media5 = document.querySelector('#image-5');
    const media6 = document.querySelector('#image-6');
    const media7 = document.querySelector('#image-7');

    
    var mainImageContainer = document.getElementById('mainImageContainer')
    var mainMediaFS = document.querySelector('.main-image-fs')
    var currentMedia = mainMedia.src;

    const nextButton = document.querySelector('.next');
    const previusButton = document.querySelector('.previus');
    const fullscreenButton = document.querySelector('.fullscreen')
    const fullscreenButtonFS = document.querySelector('.fullscreenfs')



    function changeImage(src) {

        mainMedia.style.transition = "opacity 0.3s ease";

        
    
        // Ocultar la imagen actual
        mainMedia.style.opacity = 0;

        mainMediaFS.src = src;


        setTimeout(() => { 
            // Desactivar transición temporalmente
            mainMedia.style.transition = 'none';

            // Cambiar la fuente de la imagen
            mainMedia.src = src;

            // Forzar el reflow
            void mainMedia.offsetWidth;

            // Reactivar la transición
            mainMedia.style.transition = 'opacity 0.3s ease';

            // Mostrar la imagen con un efecto cross fade
            mainMedia.style.opacity = 1;

            // Mostrar la imagen
            mainMedia.style.display = 'block';

            currentMedia = mainMedia.src;
            

        }, 300);
    }

    fullscreenButton.addEventListener('click', function(){

        mainImageContainer.style.display = 'flex';
        console.log("entrando en fs");

    })

    fullscreenButtonFS.addEventListener('click', function(){

        mainImageContainer.style.display = 'none';
        console.log("saliendo de fs");
        
    })

    nextButton.addEventListener('click', function() {

        currentMedia = mainMedia.src;

        console.log(currentMedia);

        switch (currentMedia) {

            case media2.src:
                changeImage(media3.src);
                media2.style.borderBottom = 'none';
                media3.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media3.src:
                changeImage(media4.src);
                media3.style.borderBottom = 'none';
                media4.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media4.src:
                changeImage(media5.src);
                media4.style.borderBottom = 'none';
                media5.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media5.src:
                changeImage(media6.src);
                media5.style.borderBottom = 'none';
                media6.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media6.src:
                changeImage(media7.src);
                media6.style.borderBottom = 'none';
                media7.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media7.src:
                changeImage(media2.src);
                media7.style.borderBottom = 'none';
                media2.style.borderBottom = 'solid 2px #6e4ce0';
                break;
        }
    })

    previusButton.addEventListener('click', function() {

        currentMedia = mainMedia.src;

        console.log(currentMedia);

        switch (currentMedia) {

            case media2.src:
                changeImage(media7.src);
                media2.style.borderBottom = 'none';
                media7.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media3.src:
                changeImage(media2.src);
                media3.style.borderBottom = 'none';
                media2.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media4.src:
                changeImage(media3.src);
                media4.style.borderBottom = 'none';
                media3.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media5.src:
                changeImage(media4.src);
                media5.style.borderBottom = 'none';
                media4.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media6.src:
                changeImage(media5.src);
                media6.style.borderBottom = 'none';
                media5.style.borderBottom = 'solid 2px #6e4ce0';
                break;

            case media7.src:
                changeImage(media6.src);
                media7.style.borderBottom = 'none';
                media6.style.borderBottom = 'solid 2px #6e4ce0';
                break;
        }
    })



    media2.addEventListener('click', function () {
        changeImage(media2.src);
        media2.style.borderBottom = 'solid 2px #6e4ce0';
        media3.style.borderBottom = 'none';
        media4.style.borderBottom = 'none';
        media5.style.borderBottom = 'none';
        media6.style.borderBottom = 'none';
        media7.style.borderBottom = 'none';
    });

    media3.addEventListener('click', function () {
        changeImage(media3.src);
        media3.style.borderBottom = 'solid 2px #6e4ce0';
        media2.style.borderBottom = 'none';
        media4.style.borderBottom = 'none';
        media5.style.borderBottom = 'none';
        media6.style.borderBottom = 'none';
        media7.style.borderBottom = 'none';
    });

    media4.addEventListener('click', function () {
        changeImage(media4.src);
        media4.style.borderBottom = 'solid 2px #6e4ce0';
        media3.style.borderBottom = 'none';
        media5.style.borderBottom = 'none';
        media6.style.borderBottom = 'none';
        media7.style.borderBottom = 'none';
        media2.style.borderBottom = 'none';
    });

    media5.addEventListener('click', function () {
        changeImage(media5.src);
        media5.style.borderBottom = 'solid 2px #6e4ce0';
        media4.style.borderBottom = 'none';
        media6.style.borderBottom = 'none';
        media7.style.borderBottom = 'none';
        media2.style.borderBottom = 'none';
        media3.style.borderBottom = 'none';
    });

    media6.addEventListener('click', function () {
        changeImage(media6.src);
        media6.style.borderBottom = 'solid 2px #6e4ce0';
        media7.style.borderBottom = 'none';
        media2.style.borderBottom = 'none';
        media3.style.borderBottom = 'none';
        media4.style.borderBottom = 'none';
        media5.style.borderBottom = 'none';
    });
    
    media7.addEventListener('click', function () {
        changeImage(media7.src);
        media7.style.borderBottom = 'solid 2px #6e4ce0';
        media2.style.borderBottom = 'none';
        media3.style.borderBottom = 'none';
        media4.style.borderBottom = 'none';
        media5.style.borderBottom = 'none';
        media6.style.borderBottom = 'none';
    });

    
    
});


