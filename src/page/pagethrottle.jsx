import  React,{Component} from 'react';
import throttle from 'lodash';
import Indfilho from './Indfilho'
import Direpai from './Direpai'



export default class Pagethrottle extends Component {
  constructor(props) {
      super(props)
       this.handleMode = this.handleMode.bind(this)
       this.modeNight = throttle(this.handleMode, 1000);



  }
componentWillUnmount() {
  this.modeNight.cancel();
}
modeNight() {
  var x = document.getElementById('ids')
  x.style.background = 'red';
}






 render() {
  return(

    <div>
     <h1 id='ids'>backCalll</h1>
        <button onClick={ console.log(this.modeNight)} >LoadMore</button>
        <Indfilho/>
        <Direpai/>
    </div>
)
   }

   handleMode() {
     this.props.loadMore()
   }
}
