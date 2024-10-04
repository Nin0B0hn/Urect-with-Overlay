import { useEffect } from 'react'
import '@radix-ui/themes/styles.css';
import './swapp.css';
import { createSwapy } from 'swapy'
import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Slider/slider';


const DEFAULT = {
    '1': 'a',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '2': null
  };
  
  function A() {
    return (
      <div className="item a" data-swapy-item="a">
        <div className="handle" data-swapy-handle></div>
        <div>
        <Slider />
        </div>
      </div>
    );
  }
  
  function C() {
    return (
      <div className="item c" data-swapy-item="c">
        <div>
          <ColorPicker />  
        </div>
      </div>
    );
  }
  
  function D() {
    return (
      <div className="item d" data-swapy-item="d">
        <div>D</div>
      </div>
    );
  }

  function E() {
    return (
      <div className="item e" data-swapy-item="e">
        <div>E</div>
      </div>
    );
  }

  function F() {
    return (
      <div className="item f" data-swapy-item="f">
        <div><ColorPicker />  </div>
      </div>
    );
  }

  function G() {
    return (
      <div className="item g" data-swapy-item="g">
        <div className="handle" data-swapy-handle></div>
        <div> 
          <Slider />
        </div>
      </div>
    );
  }

  
  function getItemById(itemId) {
    if (itemId === 'a') {
      return <A />;
    } else if (itemId === 'c') {
      return <C />;
    } else if (itemId === 'd') {
      return <D />;
      } else if (itemId === 'e') {
      return <E />;
    } else if (itemId === 'f') {
      return <F />;
    } else if (itemId === 'g') {
      return <G />;
    } else {
      return null;
    }
  }
  
  function Swapp() {
    const slotItems = localStorage.getItem('slotItem')
      ? JSON.parse(localStorage.getItem('slotItem'))
      : DEFAULT;
  
    useEffect(() => {
      const container = document.querySelector('.container');
      const swapy = createSwapy(container, {
        swapMode: 'hover'
      });
  
      swapy.onSwap(({ data }) => {
        console.log('swap', data);
        localStorage.setItem('slotItem', JSON.stringify(data.object));
      });
  
      swapy.onSwapEnd(({ data, hasChanged }) => {
        console.log(hasChanged);
        console.log('end', data);
      });
  
      swapy.onSwapStart(() => {
        console.log('start');
      });
  
      return () => {
        swapy.destroy();
      };
    }, []);
  
    return (

      <div id="swapp-overlay-left">
        <div className="container">
          <div className="slot a" data-swapy-slot="1">
            {getItemById(slotItems['1'])}
          </div>
          <div className="second-row">
            <div className="slot b" data-swapy-slot="2">
              {getItemById(slotItems['2'])}
            </div>
            <div className="slot c" data-swapy-slot="3">
              {getItemById(slotItems['3'])}
            </div>
          </div>
          <div className="slot d" data-swapy-slot="4">
            {getItemById(slotItems['4'])}
          </div>
          <div className="slot e" data-swapy-slot="5">
              {getItemById(slotItems['5'])}
          </div>
          <div className="slot f" data-swapy-slot="6">
              {getItemById(slotItems['6'])}
          </div>
          <div className="second-row">
            <div className="slot g" data-swapy-slot="7">
              {getItemById(slotItems['7'])}
            </div>
            <div className="slot h" data-swapy-slot="8">
              {getItemById(slotItems['8'])}  
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Swapp;  
