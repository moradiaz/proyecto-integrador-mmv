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

let section = document.querySelector('.sectionCanciones')
let proxy = 'https://api.allorigins.win/raw?url='
let url = 'https://api.deezer.com/chart'

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })

    .then (function(data){
        console.log(data);

    let track = data.tracks.data
    console.log(track);

    for (let i = 0; i < 5; i++) {
        section.innerHTML +=      
                            `<article class="articlemarc">
                            <div>
                               <a href="/detalle-canciones.html?idCanciones"><img class="marc" src="${track[i].artist.picture_big}" alt=""></a>
                            </div>
                            <div>
                                <h4>${track[i].title}</h4>
                            </div>
                        </article>`
        
    }
    })
    



    
    

    





    .catch(function(error){
        console.log(error);
    })


