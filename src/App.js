import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Canvas from './Components/canvas.js';
import Browse from './Components/browse';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/homepage';
import Modify from './Components/modify';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{marginLeft: "auto", marginRight: "auto"}}>
          <Navbar bg="primary" variant="dark">
            <Container>
              <NavbarBrand href="/">Navbar</NavbarBrand>
              <Nav className="me-auto">
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/canvas">Canvas</Nav.Link>
                <Nav.Link href="/browse">Browse Art</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/" component={Homepage} exact/>
            <Route path="/canvas" component={Canvas}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/modify/:id" component={Modify}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
