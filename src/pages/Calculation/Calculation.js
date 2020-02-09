import React from "react";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";
import Counting from "../../components/Counting/Counting";

export default function Calculation() {
    let { path, url } = useRouteMatch();
    return (
      <div class="pt-3">
        <Tab.Container id="list-group-tabs">
          <Row>
            <Col sm={4}>
              <MenuItems url={url}/>
            </Col>
            <Col sm={8}>
              <SwitchRoute path={path}/>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
}

function MenuItems({url}) {
  return (
    <ListGroup>
      <ListGroup.Item as={Link} to={`${url}/rendering`}>
        Rendering with React
      </ListGroup.Item>
      <ListGroup.Item as={Link} to={`${url}/components`}>
        Components
      </ListGroup.Item>
      <ListGroup.Item as={Link} to={`${url}/props-v-state`}>
        Props v. State
      </ListGroup.Item>
    </ListGroup>
  );
}


function SwitchRoute({path}) {
  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </Switch>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
      <Counting />
    </div>
  );
}
