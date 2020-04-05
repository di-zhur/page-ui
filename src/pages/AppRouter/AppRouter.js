import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Page from "../Page/Page";
import Calculation from "../Calculation/Calculation";

export default function AppRouter() {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <Nav.Link as={Link} to="/">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid={true}>
                <Switch>
                    <Route exact path="/">
                        <Page/>
                    </Route>
                    <Route path="/calculations">
                        <Calculation/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}



