import React, { Component } from 'react';

class NameComponemt extends Component {
    componentDidMount(){
        console.log("mounted")
    }
  render() {
    return (
      <div className="App">
        <h2>
            Hello world! This is the second component.
        </h2>
      </div>
    );
  }
}

export default NameComponemt;
