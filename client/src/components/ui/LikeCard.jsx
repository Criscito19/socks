import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../../../public/img.jpg'

export default function LikeCard({ socks, user, deleteHandler }) {
  console.log(user);
  //const [show, setShow] = useState(false);

  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={'../../../public/img.jpg'} />
        <Card.Body>
          {/* <Card.Title>{socks.title}</Card.Title> */}
           {/* <Card.Title>создал: {tea?.User?.name}</Card.Title> */}
          {socks.userId === user.data?.id && (
            <>
              {/* <Button
                onClick={() => setShow((prev) => !prev)}
                variant="primary"
              >
                {show ? 'Закрыть' : 'Изменить'}
              </Button> */}
              <Button onClick={() => deleteHandler(socks.id)} variant="danger">
                Удалить
              </Button>
            </>
          )} 

          {/* <Button variant="info">
            <Link to={`/onetea/${tea.id}`}>Подробнее</Link>
          </Button>
          {show && <TeaForm tea={tea} updateHandler={updateHandler} />} */}
        </Card.Body>
      </Card>
    </Col>
  );
}
