let qs = location.search;
let qsObjetoLiteral = new URLSearchParams(qs);

let nombreQS = qsObjetoLiteral.get ('idArtista');

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

fetch (proxy + url)
.then (function(response){
    return response.json()

})
.then (function(data){
    console.log(data)


    let top5= document.querySelector('.top5');
    top5.innerText= data.title; 

})
.catch(function(error){
    console.log(error);
})

    
    