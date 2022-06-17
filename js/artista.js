let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idArtista');

let seldc = document.querySelector('.sectionDArt');
let proxy = 'https://api.allorigins.win/raw?url='
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
        let top5 = document.querySelector('.letramiley2');

        




    })





    .catch(function(error){
        console.log(error);
    })
    
    
    