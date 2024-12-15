import React, { useEffect, useState } from "react";
import { fetchModes } from "../api/fetchWords";

const ModeSelection = ({ onSelectMode }) => {
  const [modes, setModes] = useState([]);

  useEffect(() => {
    const loadModes = async () => {
      try {
        const availableModes = await fetchModes();
        setModes(availableModes);
      } catch (error) {
        console.error("Failed to load modes:", error);
      }
    };

    loadModes();
  }, []);

  return (
    <div>
      <h1>Select a Mode</h1>
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => onSelectMode(mode)}
          className="mode-button"
        >
          {mode}
        </button>
      ))}
    </div>
  );
};

export default ModeSelection;
