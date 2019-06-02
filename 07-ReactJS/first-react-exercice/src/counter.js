import React from 'react';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <button>Increment</button>
      </div>
    )
  }

}

