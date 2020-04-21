import React, {useState, useRef} from "react";
import {Alert, Container, Jumbotron, InputGroup, FormControl, Button, Row, Col, Table} from "react-bootstrap";
import {useLinkList, useTopicList} from "./Hooks";
import {URL_PATTERN} from "../../constants/PageConstants";

export default function Page() {
    const [pageUrlValue, setPageUrlValue] = useState("");
    const inputUrlPageRef = useRef(null);

    const handleGoClick = () => {
        setPageUrlValue(inputUrlPageRef.current.value);
    };

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
                    <InputGroup size="lg">
                        <FormControl
                            id="urlPage"
                            ref={inputUrlPageRef}
                            placeholder="http://www.example.com"
                            aria-label="URL page"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="success" onClick={handleGoClick}>GO</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="pt-md-2">
                    <LinkInfo url={pageUrlValue}/>
                </Col>
            </Row>
        </div>
    );
}

function LinkInfo({url}) {

    const validateUrl = (url) => url !== "" && url !== undefined && url !== {};

    return (
        <div>
            {
                validateUrl(url) ?
                    !url.match(URL_PATTERN) ?
                        (<div>
                            <Col md={{span: 6, offset: 3}}>
                                <Alert variant={"danger"}>
                                    Please enter a valid link!
                                </Alert>
                            </Col>
                        </div>) :
                        (<div>
                            <Row>
                                <Col md={6}>
                                    <Links url={url}/>
                                </Col>
                                <Col md={6}>
                                    <Topics url={url}/>
                                </Col>
                            </Row>
                        </div>) :
                    (<div>
                        <Col md={{span: 6, offset: 3}}>
                            <Alert variant={"primary"}>
                                Please enter link!
                            </Alert>
                        </Col>
                    </div>)
            }
        </div>
    );
}

function Links({url}) {
    const [links] = useLinkList(url);

    const linkItems = links.map((e, i) => {
        return <tr key={i}>
            <td>{e.text}</td>
            <td>
                <a href={e.url}>Follow the link</a>
            </td>
        </tr>
    });

    return <div className="pt-md-5">
        <Col md={12}>
            <h4>Links:</h4>
            <Table striped bordered hover size="sm" responsive="lg">
                <thead>
                <tr>
                    <th>Text</th>
                    <th>Url</th>
                </tr>
                </thead>
                <tbody>
                {linkItems}
                </tbody>
            </Table>
        </Col>
    </div>
}

function Topics({url}) {
    const [topics] = useTopicList(url);

    const topicItems = topics.map((e, i) => {
        return <tr key={i}>
            <td>{e.tag}</td>
            <td>
                {e.values.map((e, i) => {
                    return <li key={i}>{e}</li>;
                })}
            </td>
        </tr>
    });

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
                {topicItems}
                </tbody>
            </Table>
        </Col>
    </div>
}
