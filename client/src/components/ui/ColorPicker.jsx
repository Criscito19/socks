import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {
  return (
    <div>
      <h4>выберите цвет</h4>
      <SketchPicker color={color} onChange={onChange} />
    </div>
  );
};

export default ColorPicker;