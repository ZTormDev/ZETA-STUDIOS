var juegosDisponibles = [
    { nombre: "Bloodletting", imagen: "/img/BloodlettingNoReleased.png", enlace: "/game1" },
    { nombre: "60 Seconds", imagen: "/img/60SecondsNoReleased.png", enlace: "/game2" },
    { nombre: "Voxeland", imagen: "/img/VoxelandInDev.png", enlace: "/en/games/voxeland" }
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
    window.location.href = "/search";
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
    window.location.href = "/";
})

const voxelandlogo = document.querySelector(".voxeland-logo");

voxelandlogo.addEventListener("click", function()
{
    window.location.href = "/en/games/voxeland";
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
    })

    fullscreenButtonFS.addEventListener('click', function(){

        mainImageContainer.style.display = 'none';
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

const closeTab = document.querySelector(".close-tab-mobile");
const mobileTab = document.querySelector(".tab-mobile");
const openTab = document.querySelector(".open-tab-mobile");

const openGameInfo = document.querySelector(".li-expand-gameInfo");
const openSupport = document.querySelector(".li-expand-support");
const openSocialMedia = document.querySelector(".li-expand-socialMedia");

const gameInfoExpand = document.querySelector(".gameInfo-expand");
const supportExpand = document.querySelector(".support-expand");
const socialMediaExpand = document.querySelector(".socialMedia-expand");

infoExpandBool = false
supportExpandBool = false
socialMediaExpandBool = false

closeTab.addEventListener("click", function() {

    mobileTab.style.transform = "translateX(100%)";

});

openTab.addEventListener("click", function() {

    mobileTab.style.transform = "translateX(0)";

});




openGameInfo.addEventListener("click", function() {

    if(infoExpandBool == true)
    {
        gameInfoExpand.style.display = "none"
    }
    if(infoExpandBool == false)
    {
        gameInfoExpand.style.display = "flex";
    }

    infoExpandBool = !infoExpandBool;
});

openSupport.addEventListener("click", function() {

    if(supportExpandBool == true)
    {
        supportExpand.style.display = "none"
    }
    if(supportExpandBool == false)
    {
        supportExpand.style.display = "flex";
    }

    supportExpandBool = !supportExpandBool;
});

openSocialMedia.addEventListener("click", function() {

    if(socialMediaExpandBool == true)
    {
        socialMediaExpand.style.display = "none"
    }
    if(socialMediaExpandBool == false)
    {
        socialMediaExpand.style.display = "flex";
    }

    socialMediaExpandBool = !socialMediaExpandBool;
});

function visitVoxeland() {
    window.location.href = "/en/games/voxeland";
}

function visitBloodletting() {
    window.location.href = "/en/games/bloodletting";
}

function visitSixtyseconds() {
    window.location.href = "/en/games/60-seconds";
}