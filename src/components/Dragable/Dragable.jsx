import React, { useState } from "react";
import Draggable from "react-draggable";

const MovableOverlay = () => {
  const [isDraggable, setIsDraggable] = useState(true);

  // Funktion zum Umschalten der Beweglichkeit
  const toggleDraggable = () => {
    setIsDraggable(!isDraggable);
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleDraggable} style={buttonStyle}>
        {isDraggable ? "Beweglichkeit ausschalten" : "Beweglichkeit einschalten"}
      </button>

      {/* Draggable nur aktivieren, wenn isDraggable true ist */}
      {isDraggable ? (
        <Draggable>
          <div style={overlayStyle}>
            <h2>Bewegliches Overlay</h2>
            <p>Dieses Fenster kann verschoben werden.</p>
          </div>
        </Draggable>
      ) : (
        <div style={overlayStyle}>
          <h2>Fixiertes Overlay</h2>
          <p>Dieses Fenster kann nicht verschoben werden.</p>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  position: "relative",
  padding: "20px",
};

const overlayStyle = {
  width: "300px",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  borderRadius: "10px",
  position: "relative", // Changed to relative so it doesn't overlap the button
  marginTop: "20px", // Adds space between button and overlay
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default MovableOverlay;
