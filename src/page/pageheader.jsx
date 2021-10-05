import React,{useState}  from 'react'
import Indfilho from './Indfilho'
import Direpai from './Direpai'
/*import axios from 'axios'*/

export default function Pageheader(props){

const [count, setCount] = useState('');

const newFun = props => {
  setCount(count.toUpperCase())
}


function clear() {
   setCount('')
}

function filterlist(e) {
  var input, filter, li, a, i, txtValue;
      input = document.getElementById("Fillscan");
      filter = input.value.toUpperCase();
      li = document.getElementsByTagName("li", "navp");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
        }
     }
  }



  return  (
     <div className="container">
           <h3 id='sext'>Map of Element List</h3>
           <button type='button' className='btn' onClick={e => clear()}  style={{outline: 'none'}}>Limpa</button>
             <input type='text' id="Fillscan"  placeholder="Search.."
                  onKeyUp={e => filterlist(newFun())}
                  onChange={event => setCount(event.target.value)}
                  value={count}>
              </input>
                <Filter  isFilter={count}/>
                <ParsInt isPar={count}/>
                <Indfilho/>
                <Direpai/>
        </div>

  )

}

export function ParsInt(props) {
  const isPar = props.isPar %2 === 0;
  return (
    <div>
        {isPar ? <span className='btn btn-info' style={{color:'#000'}}> Par </span>
               : <span  className='btn btn-info'style={{color:'#000'}}> Impar </span>}

        <div className='btn btn-info' style={{color:'#08c'}}>::{props.isPar}</div>
    </div>
  )
}



 export function GetFilter(props){
    return (
      <div className='container'>
           <ul id='navp' >
              <li><a href='/Carbono'>Carbono</a></li>
              <li><a href='/Hidrogenio'>Hidrogenio</a></li>
              <li><a href='/Cadmio'>Cadmio</a></li>
              <li><a href='/Oxigenio'>Oxigenio</a></li>
              <li><a href='/Litio'>Litio</a></li>
          </ul>
      </div>
    );
}

export function Filter(props) {
     if(props.isFilter) {
      return  <GetFilter/>
    }
     return   null;
 }
