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
const logo = document.querySelector(".logo");

logo.addEventListener("click", function()
{
    window.location.href = "/index.html";
})

const voxelandlogo = document.querySelector(".voxeland-logo");

voxelandlogo.addEventListener("click", function()
{
    window.location.href = "/games/Voxeland/voxeland.html";
})


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



function viewTrailer()
{
    const trailer = document.querySelector('.youtube-trailer');
    const videoTrailer = document.querySelector('.video-trailer');

    trailer.style.display = "flex";
    videoTrailer.src = "https://www.youtube.com/embed/xXyBVbryR9M?autoplay=1";

}

function quitTrailer()
{
    const trailer = document.querySelector('.youtube-trailer');
    const videoTrailer = document.querySelector('.video-trailer');

    trailer.style.display = "none";
    videoTrailer.src = "https://www.youtube.com/embed/xXyBVbryR9M?autoplay=0";

}


const gameinfoTab = document.querySelector(".gameinfo-tab");
const supportTab = document.querySelector(".support-tab");
const socialmediaTab = document.querySelector(".socialmedia-tab");

const gameinfoDropdown = document.querySelector(".gameinfo-dropdown");
const supportDropdown = document.querySelector(".support-dropdown");
const socialmediaDropdown = document.querySelector(".socialmedia-dropdown");

isActiveInfo = false;
isActiveSupport = false;
isActiveSocial = false;

gameinfoTab.addEventListener('click', function () {
    

    if (isActiveInfo == false)
    {
        gameinfoDropdown.style.display = "flex";
        supportDropdown.style.display = "none";
        socialmediaDropdown.style.display = "none";
        isActiveSocial = false
        isActiveSupport = false
    }
    if (isActiveInfo == true)
    {
        gameinfoDropdown.style.display = "none";
        
    }

    isActiveInfo = !isActiveInfo

});

supportTab.addEventListener('click', function () {
    

    if (isActiveSupport == false)
    {
        supportDropdown.style.display = "flex";
        gameinfoDropdown.style.display = "none";
        socialmediaDropdown.style.display = "none";
        isActiveInfo = false
        isActiveSocial = false
    }
    if (isActiveSupport == true)
    {
        supportDropdown.style.display = "none";
        
    }

    isActiveSupport = !isActiveSupport

});

socialmediaTab.addEventListener('click', function () {
    

    if (isActiveSocial == false)
    {
        socialmediaDropdown.style.display = "flex";
        gameinfoDropdown.style.display = "none";
        supportDropdown.style.display = "none";
        isActiveSupport = false
        isActiveInfo = false
    }
    if (isActiveSocial == true)
    {
        socialmediaDropdown.style.display = "none";
        
    }

    isActiveSocial = !isActiveSocial

});
