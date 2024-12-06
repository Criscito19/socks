import React from 'react';

export default function ErrorPage() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      overflow: 'hidden', 
      backgroundColor: '#e0e0e0' 
    }}>
      <img 
        src="/david-of-michelangelo-wth-a-sock-3d-model-obj-stl.png" 
        alt="Error" 
        style={{ 
          maxWidth: '100%',
          maxHeight: '100%', 
          objectFit: 'contain' 
        }} 
      />
    </div>
  );
}

