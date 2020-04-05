import React from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {Col, Row, Tab, Nav} from "react-bootstrap";
import Counting from "../../components/Counting/Counting";

export default function Calculation() {
  let { path, url } = useRouteMatch();
  return (
    <div class="pt-3">
      <Tab.Container id="list-group-tabs">
        <Row>
          <Col sm={3}>
            <MenuItems url={url}/>
          </Col>
          <Col sm={9}>
            <SwitchRoute path={path}/>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function MenuItems({url}) {
  return (
    <Nav className="flex-column">
      <Nav.Link as={Link} to={`${url}/rendering`}>Jobs calculation</Nav.Link>
      <Nav.Link as={Link} to={`${url}/components`}>Job information</Nav.Link>
    </Nav>
  );
}

function SwitchRoute({path}) {
  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic counting.</h3>
      </Route>
      <Route path={`${path}/:topicId`}>
        <TopicCounting />
      </Route>
    </Switch>
  );
}

function TopicCounting() {
  let { topicId } = useParams();
  return (
    <div>
      <div>
        <Counting categoryId={topicId}/>
      </div>
    </div>
  );
}

