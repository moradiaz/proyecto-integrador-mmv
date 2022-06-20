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
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = 'https://api.deezer.com/chart'

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })

    .then (function(data){
        console.log(data);

    let track = data.tracks.data
    let album = data.albums.data
    let artist = data.artists.data

    console.log(track);
el
    for (let i = 0; i < 5; i++) {
       console.log(track[i].id); 
        section.innerHTML +=      
                            `<article class="articlemarc">
                            <div>
                               <a href="./detalle-canciones.html?idCanciones=${track[i].id}"><img class="marc" src="${track[i].artist.picture_big}" alt=""></a>
                            </div>
                            <div>
                                <h4>${track[i].title}</h4>
                                <h4>${track[i].artist.name}</h4>
                            </div>
                        </article>`
        
    }

    section = document.querySelector('.sectionCanciones2')
    for (let i = 0; i < 5; i++) {
        section.innerHTML +=      
                            `<article class="articlemarc">
                            <div>
                               <a href="./detalle-album.html?idAlbum=${album[i].id}"><img class="marc" src="${album[i].cover_big}" alt=""></a>
                            </div>
                            <div>
                                <h4>${album[i].title}</h4>
                                <h4>${album[i].artist.name}</h4>
                            </div>
                        </article>`
        
    }

    section = document.querySelector('.sectionCanciones3')
    for (let i = 1; i < 6; i++) {
        section.innerHTML +=      
                            `<article class="articlemarc">
                            <div>
                               <a href="./detalle-artista.html?idArtist=${artist[i].id}"><img class="marc" src="${artist[i].picture_big}" alt=""></a>
                            </div>
                            <div>
                                <h4>${artist[i].name}</h4>
                            </div>
                        </article>`
        
    }



    })

    
    
  

     
.catch(function(error){
        console.log(error);
    })


