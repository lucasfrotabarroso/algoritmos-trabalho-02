import React, { useState } from "react";

function Somatorio() {
  const [qtdeNumeros, setQtdeNumeros] = useState("");
  const [somatorio, setSomatorio] = useState(0);
  const [numerosSomados, setNumerosSomados] = useState(0);

  const aoAlterarQtdeNumero = (event) => {
    setQtdeNumeros(event.target.value);
  };

  const aoAlterarValor = (event) => {
    const novoNumero = Number(event.target.value);
    setSomatorio(somatorio + novoNumero);
    setNumerosSomados(numerosSomados + 1);
  };

  const mostrarSomatorio = () => {
    return numerosSomados === Number(qtdeNumeros) ? (
      <div>O somatório dos números é: {somatorio}</div>
    ) : null;
  };

  return (
    <div>
      <label>Digite a quantidade de números a serem somados:</label>
      <input type="number" value={qtdeNumeros} onChange={aoAlterarQtdeNumero} />
      {[...Array(Number(qtdeNumeros))].map((_, index) => (
        <div key={index}>
          <label>Digite o número {index + 1}:</label>
          <input type="number" onChange={aoAlterarValor} />
        </div>
      ))}
      {mostrarSomatorio()}
    </div>
  );
}

export default Somatorio;
