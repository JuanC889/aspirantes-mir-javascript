function bmi(peso, altura) {
  var alturaMetros = altura / 100; // Convertir la altura de centímetros a metros
  var bmi = peso / (alturaMetros * alturaMetros);
  return bmi;
}

console.log(bmi(70, 170));
