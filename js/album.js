let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idAlbum');


let seldc = document.querySelector('.sectionDA');
let proxy = 'https://cors-anywhere.herokuapp.com/'
let url =  `https://api.deezer.com/album/${nombreQS}`

console.log(nombreQS);

fetch (proxy + url)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data);

        let track = data.data
        console.log(track);
     
        for (let i = 0; i < 1; i++) {
            console.log(track[i].id); 
             section.innerHTML +=
                                `<article class="cajaTaylor sectionDA">
                                <img class="imagenTaylor" src="${track[i].cover_big}"alt=""> </a>
                             </article>`
        }
        section = document.querySelector('.cajaTaylor'); 
        
        for (let i = 0; i < 1; i++) {
            console.log(track[i].id); 
             section.innerHTML +=
            

    })




    .catch(function(error){
        console.log(error);
    })
    
    
    