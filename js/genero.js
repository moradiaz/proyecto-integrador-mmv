let section = document.querySelector('.sectionGeneros')
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  'https://api.deezer.com/genre'


fetch (proxy + url)
    .then (function(response){
    return response.json()

})

    .then (function(data){
    console.log(data);

    let track = data.data
    console.log(track);

    

    for (let i = 1; i < 4; i++) {
        section.innerHTML +=   
           
                ` <article class="articlemarc">
                    <div>
                        <a href="./detalle-genero.html?idGeneros=${track[i].id}"><img class="marc" src="${track[i].picture_big}" alt=""> </a>
                        <h4> ${track[i].name}</h4>

                    </div>
                </article>`
        
    }

    section = document.querySelector('.sectionGeneros2')

    for (let i = 4; i < 7; i++) {
        section.innerHTML +=   
           
                ` <article class="articlemarc">
                    <div>
                        <a href="./detalle-genero.html?idGeneros=${track[i].id}"><img class="marc" src="${track[i].picture_big}" alt=""> </a>
                        <h4> ${track[i].name}</h4>

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
