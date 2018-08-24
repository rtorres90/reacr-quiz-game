import React, { Component } from 'react';
import './App.css';
import {Grid, Row, Col, Button } from 'react-bootstrap';
import Juego from './Juego';

class App extends Component {

  render() {
    return (
      <Grid fluid={true} className="App">
        <Row className="rowTest">
          <Col md={4} mdoffset={4}>
            <h1>Quiz-Game</h1>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdoffset={2}>
            <Juego></Juego>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
