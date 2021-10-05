import React,{Component} from 'react'
import  Nightmode from'../template/nightmode'
import Modal from '../pagehome/modal'
import Hooks from '../pagehome/hooks'
//import Grid from '../template/grid'

export default class Menu extends Component{



  render(){


     const nav = "nav navbar-nav"
    return (
<div>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
       <div className="navbar-header">
        </div>

          <ul  className={nav}>
              <li className="active"><a href="/#/todopage">Home</a></li>
              <li><a href="/Pageview">Pageview</a></li>
              <li><a href ="/Pageheader">PageHeader</a></li>
              <li><a href="/Pagehistory">PageHistory</a></li>
              <Hooks/>
          </ul>
      <form className="navbar-form navbar-left" action='/action_page.php'>
           <div className="form-group">
            <input type='text'  className="form-control"   placeholder="Search.."></input>
            <button type="submit" className="btn btn-default">
              <i className="glyphicon glyphicon-search"></i>
            </button>
            <Modal/>
          </div>
    </form>
  </div>
</nav>
      <hr className='hrline'/>
          <Nightmode/>
      <div>
    </div>
  </div>

    )
  }
}
