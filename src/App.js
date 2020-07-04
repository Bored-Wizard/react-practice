import React, { Component } from 'react';
import NameComponent from './components/NameComponent'

class App extends Component {

    componentDidMount(){
        console.log("mounted")
    }
    render() {
        return (
        <div className="App">
            <p>Hello</p>
            <div>
                <NameComponent/>
                <button onClick={ () => {console.log("Hey")}}>Hey</button>
            </div>
        </div>
        );
    }
}

export default App;
