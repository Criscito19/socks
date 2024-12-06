import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px 0',
        marginTop: '20px',
      }}
    >
      <Row className="justify-content-between align-items-center">
        <Col xs={12} md={6} className="text-left">
          <span>Адрес: г. Москва, Орджоникидзе ул., 11 строение 10</span>
        </Col>
        <Col xs={12} md={6} className="text-right">
          <span>Email: info@livelovesocks.com</span>
        </Col>
      </Row>
    </Container>
  );
}
