let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idArtist');

let seldc = document.querySelector('.sectionDArt');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/artist/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)


        let img = document.querySelector('.miley');
        let title = document.querySelector('.letramiley');
       
        img.src = data.picture_big; 
        title.innerText= data.name; 
    
    })




    .catch(function(error){
        console.log(error);
    })


let url2 = `https://api.deezer.com/artist/${nombreQS}/top`
let topcinco = document.querySelector('.listacanciones5')
fetch (proxy + url2)
    .then (function(response){
    return response.json()

    })
    .then (function(data){
    console.log(data)

    let canciones = data.data
    /*let top5= document.querySelector('.top5');
    top5.innerText= data.title;*/
    for (let i = 0; i < 5; i++) {
       topcinco.innerHTML += 
                            `<ol class="top5canciones">
                            <a href="./detalle-canciones.html?idCanciones=${canciones[i].id}"><li class="top5">${canciones[i].title}</li></a>
                            </ol>`
        
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

    