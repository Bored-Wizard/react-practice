import React, { Component } from 'react';
import { Nav,Navbar, NavDropdown } from 'react-bootstrap';

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
        fetch('https://www.json-generator.com/api/json/get/bPsDuslhYO?indent=2',{
            method: 'GET'
        }
        )
        .then(response => response.json)
        .then(json => {
            console.log(json)
        })
        .catch(error => {
            console.log(error)
        });
    }
    render() {
        return (
        <div>
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">Sujan Barman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default App;
