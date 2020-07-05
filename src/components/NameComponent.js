import React, { Component } from 'react';

class NameComponemt extends Component {
    componentDidMount(){
        console.log("mounted")
    }
  render() {
        const textc = this.props.textc;
        return (
        <div className="App">
            <h2>
                {textc} \n
                Hello world! This is the second component.
            </h2>
        </div>
        );
  }
}

export default NameComponemt;
