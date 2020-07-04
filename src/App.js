import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import showdown from 'showdown'

const converter  = new showdown.Converter()

function App() {
  React.useEffect(() => {
    const editPad = document.getElementById('edit-pad')
    const markdownPreview = document.getElementById('markdown-preview')

    const convertToMarkdown = () => {
      let mdText = editPad.value
      let html = converter.makeHtml(mdText)
      markdownPreview.innerHTML = html
    }
    editPad.addEventListener('input', convertToMarkdown);
    convertToMarkdown()
  })
  return (
    <Container fluid>
      <Row>
        <Col className='pad'>
          <textarea className='full-height mt-3' id='edit-pad' placeholder='Edit...'></textarea>
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
