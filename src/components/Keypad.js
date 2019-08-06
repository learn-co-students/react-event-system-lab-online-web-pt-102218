// Code Keypad Component Here
import React, { Component } from 'React'

export default class Keypad extends Component {

    outputText() {
        console.log('Entering password...') 
    }

    render() {
        return ( 
            <input type="password" onKeyUp={this.outputText} />
        )
    }
}