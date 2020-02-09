import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from "../../pages/Home/Home";
import Calculation from "../../pages/Calculation/Calculation";

export default function AppRouter() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/calculations" >Calculations</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculations">
              <Calculation />
            </Route>
          </Switch>
      </Container>
    </Router>
  );
}



