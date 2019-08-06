// Code EyesOnMe Component Here
import React, { Component } from 'React'

export default class EyesOnMe extends Component {

    focusing() {
        console.log('Good!') 
    }

    notFocusing() {
        console.log('Hey! Eyes on me!') 
    }

    render() {
        return ( 
            <button 
                onFocus={this.focusing} 
                onBlur={this.notFocusing}>
            </button>
        )
    }
}