// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  constructor(props) {
    super(props);
    this.typingPassword = this.typingPassword.bind(this)
  }

  typingPassword() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.typingPassword}  />
    )
  }
}
