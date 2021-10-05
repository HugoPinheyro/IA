import React,{Component} from 'react'
import Grid from  '../template/grid'

export default class Logmodal extends  Component {
  constructor(props) {
    super(props)

    this.state = {username: ''}

    this.myChangeHandler = this.myChangeHandler.bind(this)
    this.mySubmitHandler = this.myChangeHandler.bind(this)
    this.closeForm = this.closeForm.bind(this)

  }



  myChangeHandler(event){
    this.setState({
        username: event.target.value
    })

  const {username} = this.state

  mySubmitHandler(event) {
      event.preventDefault()
     alert("you are submitting" + username)
  }

  closeForm(event) {
    document.getElementById("modall").style.display = "none"
    this.setState({close: false })       
  }



  render() {
    return (
        <div className='primodal'>
        <Grid cols='12 9 10'>
              <div id='modall'>
               <form className='modal-content' onSubmit={this.mySubmitHandler}>
                <h1>Entrar{this.state.username}</h1>
                 <h3>Enter your Name</h3>
                    <input type='text' name='username' className='form-control' onChange={this.myChangeHandler}/>
                 <h3>Enter your Password</h3>

                  <input type='text' name='username' onChange={this.myChangeHandler}/><wbr/>

                <button type='button' className="cancel" value='Close' id='btnlog'
                onClick={this.closeForm}><label>Close</label>Close</button>

                </form>
              </div>
        </Grid>

</div>




    )
  }
}
