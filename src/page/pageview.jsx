import React,{useState, useEffect} from 'react'

export default function Pageview(props) {
let sets;
if(useState) {
    sets = '.......';
  } else {

    sets = 'null';
  }

  const [count, setCount] = useState(sets);


  useEffect(() => {
      document.title = `${count}`;
    });



function geraNumbeNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max +   - min)) + min
  console.log(aleatorio)

  return (
    array.includes(aleatorio) ? geraNumbeNaoContido(min, max, array) :  aleatorio
    
  )

}


function geraNumebs(qtde) {
  const numbers = Array(qtde)
   .fill(0)
  .reduce( (nums) => {
    const novoNumero = geraNumbeNaoContido(1, 60, nums)
    return [...nums, novoNumero ];
  }, []

)
  .sort((n1, n2) => n1 - n1)
  return  numbers;
}
const [qtde,  setQtde] = useState(props.qtde || 6)
const numerosIniciais = Array(qtde).fill(0)
const [mega, setMega] = useState(numerosIniciais)




return (

  <div className="container">
  <h3 id='sext'>StartOfuseState</h3>
      <input type='text'  id='useKey'  placeholder='UseSearch'
         onChange={e => setCount(e.target.value)}
         value={count}/>
         <div id='keycount'>Você Clicou ({count}) Vezes</div>
        <h4>Show{count}</h4>




       <div>
          <h3>Mega</h3>
          <h3>{mega.join(' ')}</h3>
          <div>
              <label>qtde de numeros</label>
              <input type='number' value={qtde} onChange={e => setQtde(+e.target.value)}/>
          </div>

          <button onClick={_ => setMega(geraNumebs(qtde))}>Gerar Numeros</button>
       </div>
  </div>

)

}
