import React, { useState } from "react";


function Nota(){
  const [quantidadeNotas, setQuantidadesNotas] = useState(0)
  const [notas,setNotas]= useState([]);
  const [resultado,setResultado] = useState('');

  const lidarComQuantidadeNotas = (event)=>{
    setQuantidadesNotas(event.target.value);
    setNotas([]);
  }
  const lidarComAlteracaoNota = (event, index) =>{
    const novasNotas = [...notas]
    novasNotas[index] =event.target.value
    setNotas(novasNotas)
  }
  const lidarComEnvio = () => {
    let reprovados = 0
    let aprovados = 0 

    for (let i = 0 ; i<quantidadeNotas; i++){
      if (notas[i] < 5){
        reprovados ++
      }
      else {
        aprovados++
      }  
    }
    setResultado(`foram aprovados ${aprovados} e ${reprovados} foram reprovados` );
  };

  const renderizarNotas = () => {

    const inputsNotas = [];

    for (let i= 0 ; i<quantidadeNotas;i++){
      inputsNotas.push(
        <div key={i}>
          <label> Nota {i+1}: 
          <input type="number" value={notas[i] || ''} onChange= {(e)=>lidarComAlteracaoNota(e,i)}/>
          </label>
        </div>
      )
    }
    return inputsNotas
  };
  return(
    <div>
      <div>
        <label>
          quantas notas voce quer analisar?
          <input type = "number" value={quantidadeNotas} onChange={lidarComQuantidadeNotas}/>
        </label>
      </div>
      {quantidadeNotas > 0 && (
        <div>
          {renderizarNotas()}
          <button onClick={lidarComEnvio}>Calcular notas</button>
        </div>
      )}
      {resultado && <div>{resultado}</div>}
    </div>
    
  )
}
export default Nota