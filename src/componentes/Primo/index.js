import { useState } from "react";

function Primo(){
    const [numero, setNumero] = useState("")
    const [resultado, setResultado] = useState("")

const isPrimo = (num) => {
    for(let i = 2; i < num; i++)
       if(num % i === 0) return false;
     return num !== 1;
};
const lidarComInputChange = (event) => {
    setNumero(event.target.value)
};
const realizarOperacao = () =>{
    const isNumeroPrimo = isPrimo(numero);
    setResultado(isNumeroPrimo? `o numero ${numero} é primo`: `o número ${numero} não é primo`)
};
return (
    <div>
        <label>Digite um número: </label>
        <input type = "number" value = {numero} onChange={lidarComInputChange} />
        <button onClick={realizarOperacao}> Verificar se é primo</button>
        {resultado? <div> {resultado} </div> :null}
    </div>
)

}
export default Primo;