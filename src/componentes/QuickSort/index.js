import React, { useState } from "react";

function QuickSort() {
  const [array, setArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);

  const handleInputChange = (event) => {
    const inputArray = event.target.value.split(",").map((num) => Number(num.trim()));
    setArray(inputArray);
  };

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  };

  const handleSortClick = () => {
    const sorted = quickSort(array);
    setSortedArray(sorted);
  };

  return (
    <div>
      <label>Digite um array de números separados por vírgula:</label>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSortClick}>Ordenar</button>
      {sortedArray.length > 0 && <div>Array Ordenado: {sortedArray.join(", ")}</div>}
    </div>
  );
}

export default QuickSort;
