import React from 'react';

export default function TexturePicker({ textures, onTextureSelect, onResetTexture, onUploadTexture }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>выберите рисунок</h4>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {textures.map((texture, index) => (
          <div key={index} onClick={() => onTextureSelect(texture)} style={{ cursor: 'pointer' }}>
            <img src={texture} alt={`texture-${index}`} style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <input type="file" accept="image/*" onChange={onUploadTexture} style={{ margin: '10px 0' }} />
      </div>
      <button
        onClick={onResetTexture}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Сбросить текстуру
      </button>
    </div>
  );
}