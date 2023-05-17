// object1.js

// Crea la variable 'pedro' como un objeto literal
let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
  saluda: function() {
    return "Hola, me llamo " + this.nombre;
  }
};



delete pedro.activo;


pedro.estatura = 1.8;


console.log(pedro.edad);


for (let key in pedro) {
  console.log(key + ": " + pedro[key]);
}

let resultadoSaludo = pedro.saluda();
console.log(resultadoSaludo);

setTimeout(() => {}, 1000);


