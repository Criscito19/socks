import { Card, Button, Form } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

export default function CartItem({ design, onCheckboxChange, onDelete }) {
  return (
    <Card style={{ width: '18rem', position: 'relative' }}>
      <Card.Img variant="top" src={design.image} style={{backgroundColor:design.color, backgroundImage:  `url(${design.selectedTexture})`}} />
      <Card.Body>
        <Card.Text>Размер: {design.selectedSize}</Card.Text>
        <Card.Text>Цена: {design.price} руб.</Card.Text>
        <Form.Check
          type="checkbox"
          label="Выбрать"
          checked={design.selected}
          onChange={() => onCheckboxChange(design)}
        />
      <FaTrashAlt
                onClick={() => onDelete(design.id)}
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              />
      </Card.Body>
    </Card>
  );
}
