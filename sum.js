function suma(numero) {
    var resultado = 0;
    for (var i = 1; i <= numero; i++) {
      resultado += i;
    }
    return resultado;
  }
  
  console.log(suma(10));
  