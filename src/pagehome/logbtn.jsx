import React,{Component} from 'react'
//import Logmodal from '../pagehome/logmodal'
import Grid from  '../template/grid'



export default class Logbtn extends Component {
  constructor(props) {
    super(props)
    this.state = {username: ''}
  }

  myChangeHandler(event){
    this.setState({username: event.target.value})
  }


  mySubmitHandler(event) {
    event.preventDefault()
    alert("you are submitting" + this.state.username)
  }

  closeForm(event) {
    document.getElementById("modall").style.display = "none";

  }


  render() {
    return (
         <div className='areabtn'  id='btn'>
             <Filter isFilter={this.props.handleHidden}/>
              <button id="btng" onClick={this.props.handleHidden}>Login</button>
            </div>
      )
  }
}



function  GetFilter(props) {
   return (
     <div className='primodal'>
     <Grid cols='12 2 10'>
          <div id='modall'>
            <form className='modal-content' onSubmit={this.mySubmitHandler}>
             <h1>Entrar{this.state.username}</h1>
             <p>Enter your Name</p>
             <input type='text' name='username' className='form-control' onChange={this.myChangeHandler}/>
             <p>Enter your Password</p>

             <input type='text' name='username' onChange={this.myChangeHandler}/><wbr/>

             <button type='button' className="cancel" value='Close' id='btnlog'
             onClick={this.closeForm}><label>Close</label>Close</button>
            </form>
           </div>
     </Grid>
    </div>
  )
}



function Filter(props) {
 const isFilter = props.isFilter

 if(isFilter) {
   return <GetFilter/>
  }
  return null
}
