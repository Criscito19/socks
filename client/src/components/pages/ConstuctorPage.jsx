import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeBox from '../ui/ThreeBox';
import ColorPicker from '../ui/ColorPicker';
import SizeSelector from '../ui/SizeSelector';
import TexturePicker from '../ui/TexturePicker';
import { DesignContext } from '../ui/DesignContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import image from '../../../public/230503_BC_MTL_Q2-Q3_PDP_LOOK_41_ESSENTIALS_SOCKS_0042e_0281d8c5-5fc9-410c-aab2-bf37bd926bce копия.png'

export default function ConstructorPage({ signInHandler, user }) {
  const [color, setColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedTexture, setSelectedTexture] = useState(null);
  const { savedDesigns, setSavedDesigns, addToCart } = useContext(DesignContext);
  const navigate = useNavigate();

  const [textures, setTextures] = useState([
    '/public/1326c4b18ff13e5502fbb5ba9da06672.jpg',
    '/public/CS-WP-10456073.jpg',
    '/public/debodoes_59310768_297518064459146_2060599483948520117_n.jpg',
    '/public/Копия pepe-the-frog-green-pattern-ivy9lt1ftw5kokwg.jpg',
    "/public/shutterstock_1155819148-min-scaled.jpg.webp"
  ]);

  const handleUploadTexture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newTextureURL = URL.createObjectURL(file);
      setTextures((prevTextures) => [...prevTextures, newTextureURL]);
    }
  };

  const handleColorChange = (updatedColor) => {
    setSelectedTexture(null);
    setColor(updatedColor.hex);
  };

  const handleTextureSelect = (texture) => {
    setColor(null);
    setSelectedTexture(texture);
  };

  const handleResetTexture = () => {
    setColor(null);
    setSelectedTexture(null);
  };

  const handleSaveDesign = () => {
    const newDesign = {
      color,
      selectedSize,
      selectedTexture,
      id: new Date().getTime(),
    };
    setSavedDesigns([...savedDesigns, newDesign]);
    console.log('Дизайн сохранен!');
  };

  const handleAddToCart = () => {
    const newDesign = {
      color,
      selectedSize,
      selectedTexture,
      id: new Date().getTime(),
      price: 200,
      image: image
    };
    addToCart(newDesign); 
    console.log('Дизайн добавлен в корзину!');
  };

  const handleViewSavedDesigns = () => {
    navigate('/saved-designs');
  };

  return (
    <div style={{ display: 'flex', height: '90vh' }}>
      <div style={{ width: '30vw', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <SizeSelector selectedSize={selectedSize} onSizeChange={setSelectedSize} />
          <ColorPicker color={color || '#ffffff'} onChange={handleColorChange} />
          <TexturePicker
            textures={textures}
            onTextureSelect={handleTextureSelect}
            onResetTexture={handleResetTexture}
            onUploadTexture={handleUploadTexture}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleSaveDesign}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <FaHeart size={24} />
            </button>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '6px 20px',
                backgroundColor: '#FF5722',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                
              }}
            >
              <FaShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          width: '70vw',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ThreeBox color={color} texture={selectedTexture} />
      </div>
    </div>
  );
}