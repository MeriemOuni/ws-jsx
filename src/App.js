import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import pictureNature from './arbre.jpeg'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className='nav' href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <h1 className='title'> Ws REACT JS </h1>
      <p style={{color:'pink', marginTop:'100px'}} >this is a paragraph</p>
      <img src='/public/mer.jpeg' alt='pict' />
      <img src={pictureNature} alt='pic' />
    </div>
  );
}

export default App;
