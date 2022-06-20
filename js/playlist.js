/*Recupero de localStorage*/ //hola//

let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage);

console.log(favoritos);

let section = document.querySelector('.cajaPlaylist');

let cancionesFavs = '';

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos actualmente</p>';
} else {
    for (let i = 0; i < favoritos.length; i++) {
        
        const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`;
        
fetch (url)
    .then(function(response) {
        return response.json()
        
    }).then(function(data){

let canciones = data;

        cancionesFavs +=`<article>
                                    <img src=${canciones.album.cover_medium}>
                                    <a href="./detalle-canciones.html?idCanciones=${canciones[i].id}"><p>Nombre: ${canciones.title}</p></a>
                                    <a href="./detalle-artista.html?idArtist=${canciones[i].id}"><p>Artista: ${canciones.artist.name}</p></a>
                                    <a href="./detalle-album.html?idAlbum=${canciones[i].id}"><p>Album: ${canciones.album.title}</p></a>
                                </article>
                                <hr>`

            section.innerHTML = cancionesFavs; 
    })
}
}

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e) {

    e.preventDefault();
    let inputBusqueda = document.querySelector('input');

    if (inputBusqueda.value == '') {
          alert('Debes ingresar una palabra');
    } else if(inputBusqueda.value.length <= 3){
          alert('Debes ingresar mas de 3 caracteres');
    }else {
          this.submit()
    }
});
