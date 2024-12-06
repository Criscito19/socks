import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../ui/Footer';

export default function AccountNewPage({ signUpHandler }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Row style={{ flex: '1' }}> 
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h3 className="text-center">Регистрация</h3>
          <Form onSubmit={signUpHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Имя</Form.Label>
              <Form.Control name="name" type="text" placeholder="Введите имя" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Введите email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="hashpass">
              <Form.Label>Пароль</Form.Label>
              <Form.Control name="password" type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f8f9fa', textAlign: 'center', padding: '10px 0', borderTop: '1px solid #dee2e6' }} />
    </div>
  );
}