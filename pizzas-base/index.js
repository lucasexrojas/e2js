const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


/*a)  Las pizzas que tengan un id impar.*/

const pizzasIdPar = pizzas.filter((pizzas)=>{
  return pizzas.id % 2 === 0;
})

const pizzasYaFiltradas = pizzasIdPar.map((pizzas) => {
  return pizzas.nombre;
});

const nombresConcat = pizzasYaFiltradas.join(', ');

console.log(`Las pizzas con ID par son ${nombresConcat}.`);


/*b) Responder: ¿Hay alguna pizza que valga menos de $600?*/

// const pizzasMenoresA600 = pizzas.some((pizzas)=>{
//   return pizzas.precio < 600;
// })? "Si extisten pizzas menores a $600"
//   : "No extisten pizzas menores a $600";

// console.log(pizzasMenoresA600);

/*c) El nombre de cada pizza con su respectivo precio.*/

// const nombreYPrecio = pizzas.map((pizza) => {
// return `la ${pizza.nombre} cuesta $${pizza.precio}`;
// })

// console.log(nombreYPrecio);


/*d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.*/


// const ingredienteDeCadaPizza = pizzas.map((pizza) => {
//   console.log(`La ${pizza.nombre} cuenta con los siguientes ingredientes: `); 
//   pizza.ingredientes.forEach((ingrediente) => {
//     console.log(ingrediente);
//   });
// });



