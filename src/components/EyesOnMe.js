import React, { Component } from 'react';

class EyesOnMe extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleBlur(){
        console.log('Hey! Eyes on me!')
    }

    handleFocus(){
        console.log('Good!')
    }
    render() {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Click</button>
        );
    }
}

export default EyesOnMe;