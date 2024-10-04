/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import './slider.css';



const Slider = () => {
  const [cubeSize, setCubeSize] = useState(1);  // Initiale Würfelgröße

  const changeSize = (size) => {
    if (window.unityInstance) {
      window.unityInstance.SendMessage('Cube', 'ChangeSize', size.toString());
    }
  };

  const handleSizeChange = (value) => {
    const size = value[0];
    setCubeSize(size);
    changeSize(size);  // Größe automatisch bei Änderung senden
  };

  return (
    <div style={{ position: 'relative' }}>
      <form>
        <RadixSlider.Root
          className="SliderRoot"
          value={[cubeSize]}  // Wert wird vom State gesteuert
          min={0.1}
          max={1}
          step={0.1}
          onValueChange={handleSizeChange}  // Callback bei Änderung
        >
          <RadixSlider.Track className="SliderTrack">
            <RadixSlider.Range className="SliderRange" />
          </RadixSlider.Track>
          <RadixSlider.Thumb className="SliderThumb" aria-label="Würfelgröße" />
        </RadixSlider.Root>
      </form>
      <p style={{ paddingLeft: "10%" }}>Würfelgröße:{cubeSize}</p>
             
    </div>
  );
};

export default Slider;
