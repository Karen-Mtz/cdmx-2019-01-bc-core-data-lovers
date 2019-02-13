//Declarar objeto de la data
const data = window.POKEMON.pokemon; 


// Declara botones
const startPokedex = document.getElementById('startPokemon');
const next = document.getElementById('nextPage');
const back = document.getElementById('regresar');

// Declara Sections
const start = document.getElementById('start');
const rootContainer = document.getElementById('rootContainer');
const options = document.getElementById('options');

// Declara boton de tipos de pokemones en un array, por medio de su clase.
const buttonFilter = Array.from(document.getElementsByClassName("boton-typeChart"));


/*
Cambiar de página en Mobile
*/
startPokedex.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});

next.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "block";
  options.style.display = "none";
});

back.addEventListener("click", () => {
  start.style.display = "none";
  rootContainer.style.display = "none";
  options.style.display = "block";
});


// Obtiene los datos solicitados del objeto Data. Lo compara con el array de botones y filta por tipo.

const gettingType = (arrayofButtons) => {
  arrayofButtons.map((buttonSelected) => {
    buttonSelected.addEventListener("click", (event) => {
      const buttonType = event.target.id;
      const dataFiltered = window.allPokemon.dataFiltered(data, buttonType);
      printResult(dataFiltered)
    })
  });
};

gettingType(buttonFilter);

// Imprime resultados por tipo. 
const printResult = (getType) => {
  const finalResult = document.getElementById('root');
  finalResult.innerHTML = "" ;
  getType.map(data => {
   finalResult.innerHTML += `<button class="pokedex"  style='width:250px; height:350px'>
    <img src="${data.img}">
    <br>Nùmero: ${data.id} 
    <br> Nombre: ${data.name} 
    <br> Tipo: ${data.type}</button>`;
});
};
