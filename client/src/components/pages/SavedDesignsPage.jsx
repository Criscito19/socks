import React, { useContext, useState } from 'react';
import { DesignContext } from '../ui/DesignContext';
import Card from 'react-bootstrap/Card';
import img from '../../../public/230503_BC_MTL_Q2-Q3_PDP_LOOK_41_ESSENTIALS_SOCKS_0042e_0281d8c5-5fc9-410c-aab2-bf37bd926bce копия.png';
import { NavLink } from 'react-bootstrap';
import { FaShareAlt, FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';

export default function SavedDesignsPage() {
  const { savedDesigns, deleteHandler } = useContext(DesignContext);
  const [showModal, setShowModal] = useState(false);
  const [shareLink, setShareLink] = useState('');

  const handleShareClick = (design) => {
    const link = `https://example.com/product/${design.id}`;
    setShareLink(link);
    setShowModal(true);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0e0e0', borderRadius: '20px' }}>
      <h2>Сохраненные дизайны</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          height: '50rem',
        }}
      >
        {savedDesigns.map((design) => (
          <Card
            key={design.id}
            style={{ position: 'relative', width: '18rem', height: '26rem', overflow: 'hidden' }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: design.color || '#ffffff',
                backgroundImage: design.selectedTexture
                  ? `url(${design.selectedTexture})`
                  : 'none',
                backgroundSize: 'cover',
                zIndex: 1,
              }}
            />

            <Card.Img
              variant="top"
              src={img}
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0,
              right: 0,
              display: 'flex', 
              justifyContent: 'space-around', 
              backgroundColor: '#ffffff', 
              padding: '10px 0',
              borderRadius: '0 0 5px 5px',
              zIndex: 3, // Убедитесь, что иконки находятся выше других элементов
            }}>
              <FaTrashAlt
                onClick={() => deleteHandler(design.id)}
                style={{ cursor: 'pointer' }}
                size={21}
              />
              <NavLink to="/cart" className="nav-link">
                <FaShoppingCart size={21} />
              </NavLink>
              <NavLink to="/saved-designs" className="nav-link" onClick={() => handleShareClick(design)}>
                <FaShareAlt size={21} />
              </NavLink>
            </div>
          </Card>
        ))}
      </div>

      {/* Модальное окно для ссылки */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ссылка на товар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ссылка на товар:</p>
          <input type="text" value={shareLink} readOnly style={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => setShowModal(false)}>
            Закрыть
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}