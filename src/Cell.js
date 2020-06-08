import React, { Component} from 'react'
import Matrix from './Matrix.js'

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  // updateColor() { 
  //   this.setState(state => { color: '#333' })
  // }

  render() {
    return(
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={() => this.setState({ color: '#333' })}></div>
    )
  }
}