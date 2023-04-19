import React, { useState } from "react";

function Fibonacci() {
  const [numero, setNumero] = useState("");
  const [sequencia, setSequencia] = useState([]);

  const gerarSequencia = (num) => {
    let sequencia = [0, 1];
    for (let i = 2; i <= num; i++) {
      sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    return sequencia;
  };

  const handleInputChange = (event) => {
    setNumero(event.target.value);
  };

  const handleGerarClick = () => {
    const novaSequencia = gerarSequencia(numero);
    setSequencia(novaSequencia);
  };

  return (
    <div>
      <label>Digite um número:</label>
      <input type="number" value={numero} onChange={handleInputChange} />
      <button onClick={handleGerarClick}>Gerar Sequência</button>
      {sequencia.length > 0 && (
        <div>
          <p>Sequência de Fibonacci até {numero}:</p>
          {sequencia.map((valor, index) => (
            <span key={index}>{valor} </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Fibonacci;

