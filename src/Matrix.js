import React, { Component } from 'react';
import Cell from './Cell'


export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>) 
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}



let redArray = []
while (redArray.length < 10)
  redArray.push('#F00')

let tenRedArrays = []
while (tenRedArrays.length < 10)
  tenRedArrays.push(redArray)

Matrix.defaultProps = {
  values: tenRedArrays
}
