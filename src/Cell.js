import React, { Component } from 'react'
import Matrix from './Matrix'

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }
    render() {
        let cellColor = ''
        this.state.color === undefined ? cellColor = '#F00' : cellColor = this.state.color
        return (
            <div className='cell' style={{backgroundColor: cellColor}}
            onClick = {this.handleClick}></div>
        )
    }
}
