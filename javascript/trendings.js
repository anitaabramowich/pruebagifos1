// TEXTO TRENDING
const cardTextoTrending = document.getElementById('caja-texto-trending');

async function trendings(){
    let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
    let url = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;
    let respuesta = await fetch(url);
    let resultado = await respuesta.json();
    console.log(resultado);

    for(let index = 0; index < 3  ; index++){
        let trending = resultado.data[index];
                let textoTrending = document.createElement('p');
                textoTrending.textContent = trending;
                textoTrending.classList.add('texto-trending');
                cardTextoTrending.appendChild(textoTrending);
    }
}trendings();

// SLIDER TRENDING
const cardGifos = document.getElementById('card-gifos-trending');
const cardGifos2 = document.getElementById('card-gifos-trending2');
const cardGifos3 = document.getElementById('card-gifos-trending3');
const cardGifos4 = document.getElementById('card-gifos-trending4');
const cardGifos5 = document.getElementById('card-gifos-trending5');

async function trendingImg(){
    let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12`;
    let respuesta = await fetch(url);
    let resultado = await respuesta.json();
    console.log(resultado);
    
    for(let index = 0; index < 1; index++){
        let img = document.createElement('img');
        img.src = resultado.data[0].images.downsized.url;
        cardGifos.appendChild(img);
        img.classList.add('trending-gif');
    }
    for(let index = 0; index < 1; index++){
        let img = document.createElement('img');
        img.src = resultado.data[1].images.downsized.url;
        cardGifos2.appendChild(img);
        img.classList.add('trending-gif');
    }
    for(let index = 0; index < 1; index++){
        let img = document.createElement('img');
        img.src = resultado.data[2].images.downsized.url;
        cardGifos3.appendChild(img);
        img.classList.add('trending-gif');
    }
    for(let index = 0; index < 1; index++){
        let img = document.createElement('img');
        img.src = resultado.data[3].images.downsized.url;
        cardGifos4.appendChild(img);
        img.classList.add('trending-gif');
    }
    for(let index = 0; index < 1; index++){
        let img = document.createElement('img');
        img.src = resultado.data[4].images.downsized.url;
        cardGifos5.appendChild(img);
        img.classList.add('trending-gif');
    }
    
}trendingImg();

let indice = 1;
muestraSlide(indice);

function avanzaSlide(n){
    muestraSlide(indice+= n);
}

function posicionSlide(n){
    muestraSlide(indice=n);
}


// setInterval(function tiempo(){
//     muestraSlide(indice+= 1);
// },4000);

function muestraSlide(n){
    let i;
    let slides = document.getElementsByClassName('card-gifos-trending');
    let barras = document.getElementsByClassName('barra');
    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display ='none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }
    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
}