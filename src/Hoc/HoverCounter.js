import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {count:0}
    }
  render() {
    return (
      <div>
      <h1 onMouseMove={this.inc}>Hover Click{this.state.count}</h1>
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}