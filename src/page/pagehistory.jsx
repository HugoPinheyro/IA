import React,{Component} from 'react';


export default class Pagehistory extends Component {
constructor(props) {
  super(props)
   this.state = { setNu: 0, setNu1: 0, setNu2: 0,  setNu3: 0, setNu4: 'Sc', favocool:''}
}

componentWillUnmount() {
  this.changeNumber()

}

 shouldComponentUpdate() {
 return true;
}

ChangeNumber(event) {

      let x =  Math.floor((Math.random() * 60));
      let h =  Math.floor((Math.random() * 60));
      let k =  Math.floor((Math.random() * 60));
      let s =  Math.floor((Math.random() * 60));
      let y;
        if(x === h || x === s || x === k) {
          x  =  +1
        }

        if(h === x || h === s || h === k) {
          h  =  +1
        }

        if(k === h || k === s || k === x) {
          k  =  +1
        }

        if(x === 1){
            y = 0;
        }

     this.setState({
        setNu:  x, setNu1: h,
        setNu2: k, setNu3: s, setNu4: y

     }

   )

}


static getDerviedStateFromProps(props, state) {
  return {favocool: 'yelllow'}
}

componentDidMount() {
  setTimeout(function(){
    alert('set')
  }, 1000)
      setTimeout(() => {
           this.setState({ favocool: 'Setyellow'})
  }, 1000)
}

render() {
  return (
     <div className='container'>
        <title>ModalRelatv</title>
          <div>
             <Length counMensage={mensage}/>
             <Py  sobrenome={{nome:'=================='}}/>
             <button type='button' className='btn'  onClick={e => this.ChangeNumber()}>Start</button>
                 <h4 >{this.state.setNu}</h4>
                 <h4>{this.state.setNu1}</h4>
                 <h4>{this.state.setNu2}</h4>
                 <h4>{this.state.setNu3}</h4>
                 <h4>{this.state.setNu4}</h4>
              <header className='tabelMs'>
                  <h3 selectcor="yelllow">my color {this.state.favocool}</h3>
             </header>
         </div>
     </div>
    )
  }
}

function Length(props) {
const counMensage = props.counMensage;
  return (
     <div className='container'>
       <h4>listNome</h4>
         {counMensage.length  >= 0  && <h2 style={{color: '#08c'}}>======= {counMensage.length} ======</h2>}
    </div>
  )
}

const mensage = [{nome:['set', 'get']}];



 function If(props) {
const elsChild = props.children.filter(child => {
  return  child.type && child.type.name === 'Else';
})[1]

  if(props.test) {
    return elsChild && props.children
    } else {
    return false;
  }
}

 const Else = props => props.children;



function Py(props){
const sobrenome = props.sobrenome || {};
  return (
    <If test={sobrenome && sobrenome.nome}>
        <h2> ===== {props.sobrenome.nome}</h2>
        <Else>All right Big Bang</Else>
        <Else>All right Big </Else>
    </If>
  )
}

// var createReactClass = require('create-react-class');
//
//  var InitClass = createReactClass({
//   getInitialState: function() {
//     return {msg: 'newClass'};
//   },
//
// handleClick: function() {
//   alert(this.state.msg)
// },
//
// render: function() {
//   return (
//     <button onClick={this.handleClick}>setNewClass</button>
//     )
//   }
// })
