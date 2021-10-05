import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons.css';
//import "base";
//import "imports/modules/forms";






export default class Modal extends Component {
constructor(props) {
  super(props)

  this.state = {isModal: '', isRec: ''}
}



Cadts() {
  this.setState({isModal:  true})
}

setMs(e) {
  this.setState({isModal: false})

}

recov() {
this.setState({isModal: 0})
}


Modalscast = () => {
  this.setState({isModal: ''})

}








render() {
   const isModal = this.state.isModal;
   let button;
    if(isModal) {
       button = <UserLogout onClick={e => this.setMs()} />
     } else {
       button = <UserLogin/>
  }

const {setFun} = e => this.Cadts()

  return (

   <div>
   <button type="button" className="btng"  data-toggle="modal" data-target="#exampleModal">
    Login
      </button>
      <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-body">
           <Greeting   isModal={isModal}/>;
              {button}

           </div>
           <div className="modal-footer">

            <h3 onClick={() => this.recov()} className="nopassword">Esqueceu a conta? </h3>

             <button type="button" className="bdefault2" onClick={setFun}>Cadastre-se</button>
             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
           </div>
            </div>
          </div>
        </div>


      </div>

    )
  }
}


function Recover(props) {
  return (
    <div className="modal-header">
    <h5 className="modal-title" id="exampleModalLabel" >IA</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    <span> Digite e seu email de reuperçao</span>
    <input type='input' placeholder='E-mail' icon='key' className='form-control' required/>
    <span> Digite e seu codigo de segurança</span>
    <input type='password' placeholder='Codigo' className='form-control' required/>
    <span> Digite  uma senha que voce ja usou</span>
    <input type='password' placeholder='Senha' className='form-control' required/>
    <button type='button'  className='btn btn-danger'>Redefinir Senha</button>



   </div>
  );
}




function SetLogin(props) {
  return (
    <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" >IA</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        <input type='input' placeholder='E-mail' icon='key' className='form-control' required/>
        <input type='password' placeholder='Senha' className='form-control' required/>
    </div>
  )
}

function SetLogut(props) {
 return (
   <div className="modal-header">
       <h5 className="modal-title" id="exampleModalLabel" >IA</h5>
       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
       </button>
       <input type='input' placeholder='E-mail' icon='key' className='form-control' required/>
       <input type='password' placeholder='Criar Senha' className='form-control' required/>
       <input type='password' placeholder='Confirmar Senha' className='form-control' required/>

   </div>
 );
}

function Msg(props) {
  const style = {
    fontSize: '20px',
   color:'dodgerblue',
   padding: '30px'
  }
  return  (
    <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" >IA</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
       <div  className='container' style={style}>Parabéns Sua Conta Foi Criada!!</div>
    </div>
  );
}

function Greeting(props) {
 const isModal = props.isModal;
 if (isModal === true) {
   return <SetLogut/>
 }else if (isModal === false) {
   return <Msg/>;
 }else if (isModal === 0) {
   return <Recover/>;
 }
   return <SetLogin/>

 }









function UserLogout(props) {
  return  <button type="button" icon='lock' onClick={props.onClick} className="bdefault">Criar Conta</button>

}





 function UserLogin(props) {
  return <button type="button"  icon='lock' onClick={props.onClick} className="bdefault">Entar</button>


}
