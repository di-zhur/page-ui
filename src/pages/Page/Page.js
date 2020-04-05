import React, {useState} from "react";
import {Container, Jumbotron, InputGroup, FormControl, Button, Row, Col, Table} from "react-bootstrap";

export default function Page() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>HTML page information</h1>
                    <p>Main information about HTML page. Input URL HTML page and click GO.</p>
                </Container>
            </Jumbotron>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <InputUrl/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Links/>
                </Col>
                <Col md={6}>
                    <Topics/>
                </Col>
            </Row>
        </div>
    );
}

function InputUrl() {
    const [urlPageValue, setUrlPageValue] = useState();

    return <InputGroup size="lg">
        <FormControl
            id="urlPage"
            value={urlPageValue}
            onChange={e => setUrlPageValue(e.target.value)}
            placeholder="http://www.example.com"
            aria-label="URL page"
            aria-describedby="basic-addon2"
            type="url"
        />
        <InputGroup.Append>
            <Button variant="success" onClick={(e) => {alert(urlPageValue)}}>GO</Button>
            <Button variant="secondary" onClick={() => setUrlPageValue("")}>CLEAR</Button>
        </InputGroup.Append>
    </InputGroup>
}

function go() {
    alert("go!")
}

function clear() {
    alert("clear!")
}

function Links() {
    return <div className="pt-md-5">
        <Col md={12}>
            <h4>Links:</h4>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Text</th>
                    <th>Url</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </Col>
    </div>
}

function Topics() {
    return <div className="pt-md-5">
        <Col md={12}>
            <h4>Topics:</h4>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Tag</th>
                    <th>Topic</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </Col>
    </div>
}