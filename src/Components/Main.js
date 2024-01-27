import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Main() {

    const backgroundImageUrl = '/futuristicMain.gif';
    return (
    <Container fluid style={{  backgroundImage: `url(${backgroundImageUrl})`,  backgroundSize: 'cover', // Cover the entire screen
    backgroundPosition: 'center center', 
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    width: '100vw', 
    color: 'white' }}>
    <Row className="justify-content-center align-items-center text-center" style={{ minHeight: '200px' }}>
      <Col>
        <h1 className='ms-4'>Let us walk the path with you,</h1>
        <h2>every step of the way</h2>
        <Button variant="outline-light" className="m-2">
          Visit J. Bruce Stewart’s page
        </Button>
        <Button variant="warning" className="m-2">
          Learn the Small World Solution
        </Button>
      </Col>
    </Row>
  </Container>
  )
}

export default Main;
