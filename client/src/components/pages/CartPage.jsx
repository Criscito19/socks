import React, { useContext, useState } from 'react';
import { DesignContext } from '../ui/DesignContext';
import CartItem from '../ui/CartItem';
import { Button } from 'react-bootstrap';
import Footer from '../ui/Footer';

export default function CartPage() {
  const { cartDesigns, deleteHandler, clearCart } = useContext(DesignContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (design) => {
    if (selectedItems.includes(design)) {
      setSelectedItems(selectedItems.filter((item) => item !== design));
      setTotalPrice(totalPrice - design.price);
    } else {
      setSelectedItems([...selectedItems, design]);
      setTotalPrice(totalPrice + design.price);
    }
  };

  const handleOrder = () => {
    const updatedDesigns = cartDesigns.filter(
      (design) => !selectedItems.includes(design)
    );
    clearCart(updatedDesigns);
    setSelectedItems([]);
    setTotalPrice(0);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
      <h2>Корзина</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {cartDesigns.map((design, index) => (
          <CartItem
            key={index}
            design={design}
            onCheckboxChange={handleCheckboxChange}
            onDelete={deleteHandler}
          />
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Итого: {totalPrice} руб.</h4>
        <Button
          variant="success"
          onClick={handleOrder}
          disabled={selectedItems.length === 0}
        >
          Заказать выбранные товары
        </Button>
      </div>
      <Footer />
    </div>
  );
}