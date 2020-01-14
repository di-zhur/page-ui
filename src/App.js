import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Form from 'react-jsonschema-form';

class App extends Component {

  state = {
    schema: {}
  }

  async componentDidMount() {
    const url = `http://localhost:5000/api/v1/calculation/getSchemaParameters/1`;
    await fetch(url).then(o => o.json())
      .then(data => {
        this.setState({ schema: data })
        console.log(this.state.schema)
      });
  }

  schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "A new task"},
      done: {type: "boolean", title: "Done?", default: false}
    }
  };

  log = (type) => console.log.bind(console, type);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Form schema={this.state.schema}
              onChange={this.log("changed")}
              onSubmit={this.log("submitted")}
              onError={this.log("errors")} />
        </div>
    );
  }

}

export default App;
