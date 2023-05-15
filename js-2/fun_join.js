function join(arr) {
    let result = "";
  
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
  
      if (i !== arr.length - 1) {
        result += " ";
      }
    }
  
    return result;
  }
  
  console.log(join(["Hola", "mundo", "desde", "OpenAI"])); // Salida: "Hola mundo desde OpenAI"
  console.log(join([1, 2, 3, 4, 5])); // Salida: "1 2 3 4 5"
  console.log(join([])); // Salida: ""
  