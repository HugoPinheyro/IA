import React,{Component} from 'react'

export default class Pageblock02 extends Component {



render() {
  return (

    <div className="block3">


    <form id="from02" action="/action_page.php">
    <div className="ntainer">
    <h2>Assine a nossa newsletter</h2>
    <p>sobre porque você deve se inscrever em nossa newsletter  blabla.</p>
    </div>

    <div className="ntainer">

        <input type="text"  placeholder="Name"  required/>
        <input type="text" placeholder="Email address"  required/>
        <label id="chek">
          <input  className='chek02' type='checkbox'></input> <span>Daily Newsletter</span>
        </label>

    </div>

    <div className="ntainer">
    <input type="submit"  value="Subscribe"></input>
    </div>

    </form>


    <footer id="fotlest">
    <div className="contato">
        <h3>Contato</h3>
        <h6>IntelBrasil@uol.com</h6>
        <h6>Intelyempresy@gmail.com</h6>
        <a href="/#/">www.navsytell.com</a>
        <a href="/#/">Endinvency.com</a>
        <div className="socialicon">
        <a href="https://www.facebook.com"  className="facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com"  className="twitter"><i className="fa fa-twitter"></i></a>
        <a href="https://plus.google.com"  className="google"><i className="fa fa-google"></i></a>
        <a href="https://br.linkedin.com"  className="linkedin"><i className="fa fa-linkedin"></i></a>
        <a href="https://www.youtube.com" className="youtube"><i className="fa fa-youtube"></i></a>
        </div>

    </div>

    <div className="sobre">
          <h3>Sobre</h3>
          <h6>infor@empresy</h6>
          <h6>IA.Informnacionaly</h6>
              <div id="iconia">
                  <h1>I.A</h1>


              </div>
      </div>
    </footer>
    <h5>Copyright © 2019 - by Hugo Pinheiro</h5>


  </div>

  )
}
}
