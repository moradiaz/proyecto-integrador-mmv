
/*almacenamos la query string de la url en una variable let que la llamamos qs, a tarvés de location.search*/
let qs = location.search;
/*convertimos la cadena de texto que obtuvimos arriba en un objeto literal para manipular*/
let qsObjetoLiteral = new URLSearchParams(qs);
/*obtenemos el valor de una clave de la query string con .get*/
let nombreQS = qsObjetoLiteral.get('idGeneros');

/*seleccionamos la seccion que queremos modificar*/
let seldg = document.querySelector('.sectionDetalleG');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/genre/${nombreQS}`

console.log(nombreQS);
/* "agarramos" esta seccion que seleccionamos, que recibe como parámetro el endpoint que es nuenstra url y el proxy que no cambia*/
fetch (proxy + url) 
/*primera promesa: recibe lo que le manda la API y lo transforma a un obj lit, recibe info y se lo manda a la segunda*/
.then(function(response){
    return response.json();

})
/*recibe la info y se manipula aca*/
.then(function(data){
    console.log(data);
    


let title = document.querySelector ('h2');
let img = document.querySelector ('.imagenesgenpop');

title.innerText = data.name;
img.src =  data.picture_big;


})



.catch(function(error){
    console.log(error);
})

let url2 =  `https://api.deezer.com/genre/${nombreQS}/artists`
let seldg2= document.querySelector('.sectionDetalleG1');



fetch (proxy + url2) 
.then(function(response){
    return response.json();

})

.then(function(data){
    console.log(data);

    let track = data.data
    console.log(track);

    for (let i = 1; i < 6; i++) {
        seldg2.innerHTML +=   
           
                     `<article>
                        <div>
                        <a href="./detalle-artista.html?idArtist=${track[i].id}"><h1 class="detallegenero"> ${track[i].name}</h1></a>
                        </div>
                         <div>
                         <img class="imagenesgeneros" src="${track[i].picture_big}" alt=""> 
                         </div>
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






