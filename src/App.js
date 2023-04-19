import React from 'react';
import Fibonacci from './componentes/Fibonacci';
import Mdc from './componentes/Mdc';
import Nota from './componentes/Nota';
import Primo from './componentes/Primo';
import QuickSort from './componentes/QuickSort';
import Somatorio from './componentes/Somatorio';

function App() {
  return (
    <div>
      <h1>Calcular nota:</h1>
      <p>Insira as notas e clique no botão para calcular:</p>
      <Nota />
      <h1>Calcular MDC:</h1>
      <Mdc/>
      <h1>Verificar se o número é primo: </h1>
      <Primo/>
      <h1>Somatorio: </h1>
      <Somatorio/>
      <h1>Fibonacci:</h1>
      <Fibonacci/>
      <h1>Ordenar um Array: </h1>
      <QuickSort/>
    </div>

  );
}

export default App;
