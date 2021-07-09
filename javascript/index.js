
// // INPUT DE BUSQUEDA GIFS

// const searchForm = document.getElementById('search-form');
// const searchInput = document.getElementById('search-input');
// const resultsEl = document.getElementById('results');
// const vermas = document.getElementById('ver-mas');
// const containerSugerencias = document.getElementById('container-sugerencias');
// const contenedorTituloBusqueda = document.getElementById('contenedor-titulo-busqueda')
// let offset = 0;
// let q;


//     async function getSearch(q){
//         let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
//         let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=12&offset=${offset}`;
//         let respuesta = await fetch(url);
//         let resultado = await respuesta.json();
//         console.log(resultado);
        
//         for(let index = 0; index < 12; index++){
//             let img = document.createElement('img');
//             img.src = resultado.data[index].images.downsized.url;
//             resultsEl.appendChild(img);
//             img.classList.add('gifresults');
//         }
//         // vermas.style.display = ('unset');
//     }
        
//         async function autocomplete(q) {
//             let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
//             let url2 = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${q}&limit=5&offset=${offset}`;
//             let respuesta2 = await fetch(url2);
//             const resultado2 = await respuesta2.json();
            
            
//             for(let index = 0; index < 4; index++){
//                 let sugerencia = resultado2.data[index].name;
//                 let textoSugerencia = document.createElement('p');
//                 textoSugerencia.textContent = sugerencia;
//                 textoSugerencia.classList.add('textoSugerenciaStyle');
//                 containerSugerencias.appendChild(textoSugerencia); 
//                 searchInput.addEventListener('keyup', () => {
//                 containerSugerencias.removeChild(textoSugerencia);
//             })

//             textoSugerencia.addEventListener('click', () =>{
//                 q = searchInput.value;
//                 getSearch(q);
//                 let iconSearch = document.getElementById('icon-search');
//                 iconSearch.src = "imagenes/close.svg";
//             })
//             } 
//         }
        
//     searchInput.addEventListener('keyup', () =>{
//             containerSugerencias.style.display = 'block';
//             q = searchInput.value 
//             autocomplete(q);
//         });

//         // iconSearch.addEventListener('click', () =>{
//         //     resultsEl.removeChild(img);
//         // })
//     // vermas.addEventListener('click', () =>{
//     //         offset += 12;
//     //         getSearch(q);
//     //     });

//     searchForm.addEventListener('submit', function(e) {
//             q = searchInput.value;
//             e.preventDefault();
//             offset = 0;
//             getSearch(q);
//             let contenedorSugerenciasTrendings = document.getElementById("contenedor-sugerencias-trendings");
//             contenedorSugerenciasTrendings.style.display = 'none';
//             let botonVerMas = document.getElementById('boton-vermas');
//             let btnVerMas = document.createElement('button');
//             btnVerMas.classList.add('vermas');
//             botonVerMas.appendChild(btnVerMas);
//         })

//     searchForm.addEventListener('submit', () =>{
//             q = searchInput.value;
//             let resultadoTitulo = document.createElement('h2');
//             resultadoTitulo.textContent = q;
//             resultadoTitulo.classList.add('titulo-busqueda');
//             contenedorTituloBusqueda.appendChild(resultadoTitulo);
//     })

//     function changeImage() {
//             let iconSearch = document.getElementById('icon-search');
//             if (iconSearch.src.match("icon")) {
//             iconSearch.src = "imagenes/close.svg";
//     } else {
//             iconSearch.src = "imagenes/icon-search.svg";
//         }
// }


