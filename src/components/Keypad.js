import React from 'react';

class Keypad extends React.Component {
  HandlePasswordEvent = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.HandlePasswordEvent}/>
      </div>
    )
  }
}

export default Keypad;