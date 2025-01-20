import * as pd from 'danfojs-node'; // Use danfo.js as an alternative to pandas

const title = "Recetario";
const pageMessage = "Elige una de las tres opciones";

// Update DOM elements
document.querySelector("#header-title").innerHTML = title;
document.querySelector("#page-title").innerHTML = title;
document.querySelector("#page-message").innerHTML = pageMessage;

// Example dataset
const data = `Título,Ingredientes,Instrucciones,Dificultad,Tiempo,Puntuación,es_plato,Sano,es_comida,es_cena
"Ensalada César","lechuga, pollo, queso parmesano, aderezo césar","Mezclar los ingredientes.",Fácil,10,4.5,0.5,0,1,1
"Sopa de Tomate","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,1,1,1
"Embutido","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,0.5,0,1,1
"Verduras a la plancha","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,0,1,1
"Pasta Carbonara","pasta, huevo, panceta, queso parmesano","Cocinar la pasta y mezclar con los otros ingredientes.",Media,25,4.7,1,1,1,1
"Tacos de Pollo","pollo, tortilla, salsa, limón","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,1,1
"Guisantes","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,0,1
"Judias","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,0,1
"Empanadillas","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,1
"Gyozas","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,0.5,0,0,1
"Ensalada tomate","lechuga, pollo, queso parmesano, aderezo césar","Mezclar los ingredientes.",Fácil,10,4.5,0.5,0,0,1
"Crema calabaza ","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,1,0,1
"Crema calabacín","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,0.5,0,0,1
"Ensalada de pasta","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,0,1,0
"Arroz con pollo","pasta, huevo, panceta, queso parmesano","Cocinar la pasta y mezclar con los otros ingredientes.",Media,25,4.7,1,1,1,0
"Hummus","pollo, tortilla, salsa, limón","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,0.5,1,1,0
"Patatas fritas","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,1,0
"Tortilla de patata","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,1,0
"Garbanzos","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,0
"Lentejas","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,0
"Plato 1","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,0.5,0,1,1
"Plato 2","lechuga, pollo, queso parmesano, aderezo césar","Mezclar los ingredientes.",Fácil,10,4.5,0.5,0,1,1
"Plato 3","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,1,1,1
"Plato 4","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,0.5,0,1,1
"Plato 5","tomate, cebolla, ajo, caldo de verduras","Cocinar los ingredientes y licuar.",Media,30,4.0,1,0,1,1
"Plato 6","pasta, huevo, panceta, queso parmesano","Cocinar la pasta y mezclar con los otros ingredientes.",Media,25,4.7,1,1,1,1
"Plato 7","pollo, tortilla, salsa, limón","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,0.5,1,1,1
"Plato 8","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,1,1
"Plato 9","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,1,1,1
"Plato 10","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,0
"Plato 11","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,1
"Plato 12","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,1
"Plato 13","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,1
"Plato 14","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,0
"Plato 15","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,0
"Plato 16","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,1
"Plato 17","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,1
"Plato 18","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,0
"Plato 19","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,1,0
"Plato 20","guisantes","Cocinar el pollo y preparar los tacos.",Fácil,20,4.6,1,0,0,1
`;

// Load data into a DataFrame
let recetasDf = pd.readCSV(pd.utils.stringToDataFrame(data));

// Add derived columns
recetasDf.addColumn(
    "Lista_ingredientes",
    recetasDf["Ingredientes"].apply((x) => x.split(", "))
);
recetasDf.addColumn(
    "Numero_ingredientes",
    recetasDf["Lista_ingredientes"].apply((x) => x.length)
);

// Filter DataFrames
const recetasDfComidas = recetasDf.query(row => row.es_comida === 1);
const recetasDfComidasMedias = recetasDfComidas.query(row => row.es_plato !== 1);

const recetasDfCenas = recetasDf.query(row => row.es_cena === 1);
const recetasDfCenasMedias = recetasDfCenas.query(row => row.es_plato !== 1);

// Utility function for logging
function log(message) {
    console.log(message); // Log to JS console
}

// Random recipe function
function recetaAleatoria() {
    const randomRecipe = recetasDf.sample(1);
    document.querySelector("#receta-aleatoria-output").style.display = "block";
    document.querySelector("#receta-aleatoria-inner").innerHTML = randomRecipe.at(0, "Título");
}

// Search by ingredients
function buscarPorIngredientes() {
    const ingredientesInput = document.querySelector("#txt-url").value;
    const ingredientes = ingredientesInput.split(", ");

    recetasDf.addColumn(
        "Coincidencias",
        recetasDf["Lista_ingredientes"].apply((x) => new Set(x).intersection(new Set(ingredientes)))
    );
    recetasDf.addColumn(
        "Numero_coincidencias",
        recetasDf["Coincidencias"].apply((x) => x.size)
    );
    recetasDf.addColumn(
        "Porc_ingredientes",
        recetasDf["Numero_coincidencias"].apply((x, idx) => (x / recetasDf.at(idx, "Numero_ingredientes")) * 100)
    );

    const filteredDf = recetasDf.query(row => row.Porc_ingredientes > 80);
    document.querySelector("#buscar-ingredientes-output").style.display = "block";

    const listItems = filteredDf["Título"].toArray().map(title => `<li>${title}</li>`).join("");
    document.querySelector("#buscar-ingredientes-inner").innerHTML = `<ul>${listItems}</ul>`;
}

// Weekly plan generator
function crearPlanSemanal() {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const planSemanalDf = pd.DataFrame({
        Día: days,
        Comida: Array(7).fill(""),
        Cena: Array(7).fill("")
    });

    // Fill in comidas
    let comidas = [];
    for (let i = 0; i < 7; i++) {
        let randomDish = recetasDfComidas.sample(1).at(0, "Título");
        while (comidas.includes(randomDish)) {
            randomDish = recetasDfComidas.sample(1).at(0, "Título");
        }
        comidas.push(randomDish);
        planSemanalDf.at(i, "Comida", randomDish);
    }

    // Fill in cenas
    let cenas = [];
    for (let i = 0; i < 7; i++) {
        let randomDish = recetasDfCenas.sample(1).at(0, "Título");
        while (cenas.includes(randomDish)) {
            randomDish = recetasDfCenas.sample(1).at(0, "Título");
        }
        cenas.push(randomDish);
        planSemanalDf.at(i, "Cena", randomDish);
    }

    document.querySelector("#plan-semanal-output").style.display = "block";
    // Display the plan (use an HTML table or other UI element)
}

// Attach event listeners for UI interaction
document.querySelector("#random-recipe-btn").addEventListener("click", recetaAleatoria);
document.querySelector("#search-ingredients-btn").addEventListener("click", buscarPorIngredientes);
document.querySelector("#weekly-plan-btn").addEventListener("click", crearPlanSemanal);
