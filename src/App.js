import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Canvas from './Components/canvas.js';
import Browse from './Components/browse';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Container>
              <NavbarBrand href="/">Navbar</NavbarBrand>
              <Nav className="me-auto">
                <Nav.Link href="/">Canvas</Nav.Link>
                <Nav.Link href="/browse">Browse Art</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Canvas />}></Route>
            <Route path="/browse" element={<Browse />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
