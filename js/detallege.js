let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('id');


let seldg = document.querySelector('.sectionDetalleG');
let proxy = 'https://api.allorigins.win/raw?url='
let url =  'https://api.deezer.com/genre/${nombreQS}'

fetch (proxy + url) 
.then(function(response){
    return response.json();

})

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






