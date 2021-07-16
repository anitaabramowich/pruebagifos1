const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const vermas = document.getElementById('ver-mas');
const containerSugerencias = document.getElementById('container-sugerencias');
const contenedorTituloBusqueda = document.getElementById('contenedor-titulo-busqueda');
const contenedorTendencias = document.getElementById('contenedor-tendencias');
const iconSearch = document.getElementById('icon-search');
const iconClose = document.getElementById('icon-close');
const contenedorSugerenciasTrendings = document.getElementById("contenedor-sugerencias-trendings");
const botonVerMas = document.getElementById('boton-vermas');
let offset = 0;
let q;


    async function getSearch(q){
        let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=12&offset=${offset}`;
        let respuesta = await fetch(url);
        let resultado = await respuesta.json();
        console.log(resultado);
        
        for(let index = 0; index < 12; index++){
            let img = document.createElement('img');
            img.src = resultado.data[index].images.downsized.url;
            resultsEl.appendChild(img);
            img.classList.add('gifresults');
            iconClose.addEventListener('click', ()=>{
                iconSearch.style.display = 'block';
                iconClose.style.display = 'none';
                resultsEl.removeChild(img);
            }); 
        }
    }
    
    // RESULTADOS ICONO BUSQUEDA
    iconSearch.addEventListener('click', ()=>{
            iconSearch.style.display = 'none';
            iconClose.style.display = 'block';
            q = searchInput.value;
            offset = 0;
            getSearch(q);
            contenedorSugerenciasTrendings.style.display = 'none';
            contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
            const resultadoTitulo = document.createElement('h2');
            resultadoTitulo.textContent = q;
            resultadoTitulo.classList.add('titulo-busqueda');
            contenedorTituloBusqueda.appendChild(resultadoTitulo);
            const btnVerMas = document.createElement('button');
            btnVerMas.classList.add('vermas');
            btnVerMas.textContent = "ver mas";
            botonVerMas.appendChild(btnVerMas);
            
            btnVerMas.addEventListener('click', () =>{
            q = searchInput.value;
            offset += 12;
            getSearch(q);
        });
            iconClose.addEventListener('click', () =>{
            contenedorTituloBusqueda.removeChild(resultadoTitulo);
            botonVerMas.removeChild(btnVerMas);
            contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
        });
    });

        async function autocomplete(q) {
            let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
            let url2 = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${q}&limit=5&offset=${offset}`;
            let respuesta2 = await fetch(url2);
            const resultado2 = await respuesta2.json();
            
            
            for(let index = 0; index < 4; index++){
                let sugerencia = resultado2.data[index].name;
                let textoSugerencia = document.createElement('p');
                textoSugerencia.textContent = sugerencia;
                textoSugerencia.classList.add('textoSugerenciaStyle');
                containerSugerencias.appendChild(textoSugerencia); 
                searchInput.addEventListener('keyup', () => {
                containerSugerencias.removeChild(textoSugerencia);
            })

            textoSugerencia.addEventListener('click', () =>{
                q = searchInput.value;
                getSearch(q);
                iconSearch.style.display = 'none';
                iconClose.style.display = 'block';
                contenedorSugerenciasTrendings.style.display = 'none';
                contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
                let resultadoTitulo = document.createElement('h2');
                resultadoTitulo.textContent = sugerencia;
                resultadoTitulo.classList.add('titulo-busqueda');
                contenedorTituloBusqueda.appendChild(resultadoTitulo);
                let btnVerMas = document.createElement('button');
                btnVerMas.classList.add('vermas');
                btnVerMas.textContent = "ver mas";
                botonVerMas.appendChild(btnVerMas);
            
                btnVerMas.addEventListener('click', () =>{
                q = searchInput.value;
                offset += 12;
                getSearch(q);
            });
                iconClose.addEventListener('click', () =>{
                contenedorTituloBusqueda.removeChild(resultadoTitulo);
                botonVerMas.removeChild(btnVerMas);
                contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
            });
        });
            } 
        }
        
    // CONTENEDOR SUGERENCIAS
    searchInput.addEventListener('keyup', () =>{
            containerSugerencias.style.display = 'block';
            q = searchInput.value 
            autocomplete(q);
        });


