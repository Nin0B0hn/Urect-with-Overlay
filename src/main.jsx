import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/Unity/App';   // Unity-Komponente
import Swapp from './components/Swapp/swapp';  // Swapy-Komponente
// import '@radix-ui/themes/styles.css';
import MovableOverlay from './components/Dragable/Dragable';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App /> 
      <MovableOverlay />
      <div className="container4">

      <div className="container2">
        <Swapp />

      </div>

      </div>

    </StrictMode>,
  );
} else {
  console.error("Could not find root element to mount React app");
}
