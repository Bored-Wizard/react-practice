import React, { Component } from 'react';
import NameComponent from './components/NameComponent'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : "sujan",
            job : "programmer",
        };
    }

    click(){
        this.setState({
            name : "Sujan Barman",
            job : "backender",
        })
    }

    componentDidMount(){
        console.log("mounted")
    }
    render() {
        return (
        <div className="App">
            <p>{this.state.name} - {this.state.job}</p>
            <div>
                <NameComponent/>
                <button onClick={ 
                    this.click.bind(this)
                }>ok</button>
            </div>
        </div>
        );
    }
}

export default App;
