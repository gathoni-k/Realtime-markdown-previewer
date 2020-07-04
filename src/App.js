import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className='pad'>
          <textarea className='full-height mt-3 edit-pad' placeholder='Edit...'></textarea>
        </Col>
        <Col className='markdown'>
          <header className='header'>Preview Markdown</header>
          <div id='markdown-preview'></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
