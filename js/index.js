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

const url = 'https://developers.deezer.com/api'

fetch ()
    .then (function(response){
        return response.json()

    })

    .then (function(data){
        console.log(data);
    })







    .catch(function(error){
        console.log(error);
    })