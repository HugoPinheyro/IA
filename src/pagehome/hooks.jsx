import React,{Component} from 'react'
//import Menu from '../template/menu'



export default class Hooks extends Component {
  constructor(props) {
      super(props)
      this.state = {date: new Date()}

    }


  componentDidMount() {
     this.timerID = setInterval(
    () => this.tick(), 1000

  );
}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
   this.setState({ date: new Date()});
}

render() {
  return (
      <div>
        <h2 id='time'>It is{this.state.date.toLocaleTimeString()}.</h2>
      </div>

    )
  }
}
