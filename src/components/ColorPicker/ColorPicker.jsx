/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const ColorPicker = () => {
  const [hexColor, setHexColor] = useState('#FFFFFF');  // Farbe für den Farbpicker

  const changeColor = (color) => {
    if (window.unityInstance) {
      window.unityInstance.SendMessage('Cube', 'ChangeColor', color);
    }
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setHexColor(color);
    changeColor(color);  // Automatisch die Farbe nach Auswahl senden
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Farbpicker */}
      <div style={{
        position: 'relative', 
        zIndex: 10,
        // backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '10px',
        borderRadius: '8px'
      }}>
        <input
          type="color"
          value={hexColor}
          onChange={handleColorChange}
          style={{ width: '150px', height: '50px', cursor: 'pointer' }}
        />
        <p>Ausgewählte Farbe: {hexColor}</p>
      </div>

    </div>
  );
};

export default ColorPicker;
