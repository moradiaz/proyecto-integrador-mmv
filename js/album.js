let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idAlbum');


let section = document.querySelector('.cajaTaylor'); 
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/album/${nombreQS}`
let url2 = `https://api.deezer.com/album/${nombreQS}/tracks`
console.log(nombreQS);

fetch (proxy + url) 
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)
        
        let img = document.querySelector('.imagenTaylor');
        let title = document.querySelector('.tituloTaylor');
        let nombrealbum = document.querySelector('.nombrealbumtaylor');
        let ngenero = document.querySelector('.generotaylor');
        let ngenero2 = document.querySelector('.aniotaylor');
        let ngenero3 = document.querySelector('.discotaylor');
        
        img.src = data.cover_medium;
        title.innerText = data.artist.name;
        nombrealbum.innerText = data.title; 
        ngenero2.innerText = data.release_date;
        ngenero.innerText = data.genres.data[0].name;
    })
    
    let section2= document.querySelector('.cancionesTaylor');
    fetch (proxy + url2) 
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)
        
        
        let canciones = data.data; 
       
        for (let i = 0; i < canciones.length -1; i++) {
            section2.innerHTML +=
            `<article class="olcanciones">
            <a href="./detalle-canciones.html?idCanciones=${canciones[i].id}"><ol class="olcanciones">${canciones[i].title}</ol></a>
            </article>`
           
      
        }

        
    })
    .catch(function(error){
        console.log(error);
    })
    
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


        
    

    