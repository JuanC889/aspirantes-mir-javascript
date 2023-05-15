function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  }
  
  console.log(max([1, 3, 2])); // Salida: 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])); // Salida: 10
  console.log(max([])); // Salida: undefined
  