/*Recupero de localStorage*/ //hola//

let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage);

console.log(favoritos);

let section = document.querySelector('.cajaPlaylist');

let cancionesFavs = '';

if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos actualmente</p>';
} else {
    for (let i = 0; index < favoritos.length; i++) {
        
        const url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`;
        
fetch (url)
    .then(function(response) {
        return response,json()
        
    }).then(function(data){


        cancionesFavs +=`<article>
                                    <img src=${data.album.cover_big}>
                                    <a href="./detalle-canciones?idCanciones=${data[i].id}"><p>Nombre: ${data[i].title}</p></a>
                                    
                                </article>`

            section.innerHTML = cancionesFav; 
    })
}
}
