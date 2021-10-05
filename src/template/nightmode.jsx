import  React,{Component} from 'react';
//import Pageblock  from '../page/pageblock'

class Nightmode extends Component {
  constructor(props) {
      super(props)
        this.state =  {modeNight: true}
      }





  modeNight() {
     const nightModeStorage = localStorage.getItem('gmtNightMode');
     const nightMode = document.querySelector('#night-mode');
     // caso tenha o valor no localStorage

     if(nightModeStorage) {
       // ativa o night mode
          document.documentElement.classList.add('night-mode');
       // já deixa o input marcado como ativo
          nightMode.checked = true;
     }
     // ao clicar mudaremos as cores
       // adiciona a classe `night-mode` ao html
         document.documentElement.classList.toggle('night-mode');


       // se tiver a classe night-mode
            if ( document.documentElement.classList.contains('night-mode')) {

       // salva o tema no localStorage
               localStorage.setItem('gmtNightMode', true);
               return;
          }

     // senão remove
         localStorage.removeItem('gmtNightMode','tabs');

        }




 render() {
  return (
      <div>
        <aside className="section">
           <label className="switch">
               <input type="checkbox"  id='night-mode' onClick={() => this.modeNight()}/>
                 <span className="slider round"></span>
             </label>
           </aside>
          </div>
       )
   }

}

export default Nightmode
