import React, { useEffect } from 'react';

const UnityWebGL = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/public/Build/Build.loader.js"; // Pfad zum Unity WebGL Build
    document.body.appendChild(script);

    script.onload = () => {
      window.createUnityInstance(document.querySelector("#unityCanvas"), {
        dataUrl: "/public/Build/build.data",  // Pfad zur WebAssembly-Daten-Datei
        frameworkUrl: "/public/Build/build.framework.js",  // Framework-Datei
        codeUrl: "/public/Build/build.wasm",  // WebAssembly-Datei
      }).then((unityInstance) => {
        console.log("Unity Instance Loaded");
        window.unityInstance = unityInstance;
      }).catch((message) => {
        console.error(message);
      });
    };
  }, []);

  return (
    <canvas id="unityCanvas" style={{ position: 'absolute', width: '100%', height: '100vh' }} />
  );
};

const App = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh' }}>
      <UnityWebGL />
    </div>
  );
};

export default App;
