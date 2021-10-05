import React,{useState} from 'react'
import Indfilho from './Indfilho'


export default function Lest() {

  const[nome,  setNome]  = useState('');
  const[idade, setIdade]  = useState('');
  const[cool,  setCool]  = useState('');

function setInfo(nome, idade, cool) {
setNome(nome);
setIdade(idade);
setCool(cool);

console.log(nome, idade, cool)
}

var x = [nome  ,' ', idade ,' ', '' ,cool]



  return (
    <div>
         <div>phaiiiiiiiiiii</div>
           <Indfilho quandoKlicar={setInfo} > setssss</Indfilho>

           <div>{x} <strong>My Name is [{ nome }]</strong></div>
           <div><strong>I have [{ idade }]</strong></div>
           <div><strong>Yes Nerd [{ cool}]</strong></div>
        </div>
  )
}
