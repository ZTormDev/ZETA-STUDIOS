var juegosDisponibles = [
    { nombre: "Bloodletting", imagen: "img/BloodlettingNoReleased.png", enlace: "game1.html" },
    { nombre: "60 Seconds", imagen: "img/60SecondsNoReleased.png", enlace: "game2.html" },
    { nombre: "Voxeland", imagen: "img/VoxelandInDev.png", enlace: "game3.html" }
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
    window.location.href = "search.html";
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