import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


const RunawayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const button = document.querySelector('.runaway-button');
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const distanceX = mouseX - (buttonRect.left + buttonRect.width / 2);
        const distanceY = mouseY - (buttonRect.top + buttonRect.height / 2);

        const threshold = 100; 
        const moveDistance = 30; 

        if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
          let newX = position.x + (distanceX > 0 ? 1 : -1) * moveDistance;
          let newY = position.y + (distanceY > 0 ? 1 : -1) * moveDistance;

         
          const maxX = window.innerWidth - buttonRect.width;
          const maxY = window.innerHeight - buttonRect.height;

          newX = Math.max(0, Math.min(newX, maxX));
          newY = Math.max(0, Math.min(newY, maxY));

          setPosition({ x: newX, y: newY });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position]);

  const handleClick = () => {
    console.log('Кнопка была нажата!');
  };

  return (
    <Button
      className="runaway-button"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: 'left 0.2s, top 0.2s',
      }}
      onClick={handleClick}
    >
      МНЕ НЕ НУЖНЫ НОСКИ!!!
    </Button>
  );
};

export default RunawayButton;
