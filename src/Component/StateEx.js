import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"Prathap"
      }
    }
    inc =()=>{
        this.setState({count:this.state.count+2})

    }
  render() {
    return (
      <h1>

      <button onClick={this.inc}>
      ClickMe {this.state.count}</button>
      </h1>
    )
  }
}
