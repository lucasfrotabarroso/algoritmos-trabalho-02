import { useState } from "react";

function Mdc () {
const [numero1 , setNumero1] = useState("");
const [numero2 , setNumero2] = useState("");
const [resultado, setResultado] =useState("")

const LidarComNumero1 = (event)=>{
    setNumero1(event.target.value);
}
const LidarComNumero2 = (event)=>{
    setNumero2(event.target.value)
}
const lidarComEnvio= ()=>{
    let n1 = parseInt(numero1);
    let n2 = parseInt(numero2);
    while (n2 !== 0) {
      let temp = n2;
      n2 = n1 % n2;
      n1 = temp;
    }
    setResultado(`O MDC entre ${numero1} e ${numero2} é ${n1}`);
  };
  return (
    <div>
        <div>
            <label>
                Digite o primeiro Numero:
                <input type = "number" value={numero1} onChange={LidarComNumero1}/>
            </label>
        </div>
        <div>
            <label>
                Digite o Primeiro Numero:
                <input type = "number" value={numero2} onChange= {LidarComNumero2}/>
            </label>
        </div>
        <button onClick={lidarComEnvio}>calcular MDC</button>
        {resultado && <div>{resultado}</div>}
    </div>
  )
}
export default Mdc;