
let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idCanciones');


let seldc = document.querySelector('.sectionDC');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/track/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)
    


let img = document.querySelector('.detalleC');
let title = document.querySelector('.titulodoja'); 
let cancion = document.querySelector('.nombrecanciondoja');
let album = document.querySelector('.nombrealbum');
let player = document.querySelector('.playerDA')

img.src = data.album.cover_big 
title.innerText = data.artist.name
cancion.innerText = data.title 
album.innerText = data.album.title 
player.src = data.player.id

console.log(data.album.cover_big, data.artist.name, data.title , data.album.title )

})





.catch(function(error){
    console.log(error);
})

let favoritos = [];


    let recuperoStorage = localStorage.getItem('favoritos'); 


    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
}

let fav = document.querySelector('.fav');

if (favoritos.includes(nombreQS)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener('click', function (e) {
    e.preventDefault()

   

if (favoritos.includes(nombreQS)) {
    
    /*Evaluar si existe en el array de fav*/
    let indice = favoritos.indexOf(nombreQS);
    favoritos.splice(indice, 1)
    fav.innerText = "Agregar a fav";

} else{
    favoritos.push(nombreQS);
    fav.innerText = "Quitar de fav";
}

/* Subir al local storage */
let favsJSON = JSON.stringify(favoritos);
localStorage.setItem('favoritos', favsJSON)

});

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

