// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  render() {
    return (

    <button onFocus={handleFocus} onBlur={handleBlur}>This is a Button</button>
    )

  }
}

function handleFocus() {
  console.log('Good!')
}

function handleBlur() {
  console.log('Hey! Eyes on me!')
}
