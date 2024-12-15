import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchModes } from "../api/fetchWords";
import "./LandingPage.css";

const LandingPage = () => {
  const [modes, setModes] = useState([]);
  const navigate = useNavigate();

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

  const handleModeSelect = (mode) => {
    navigate(`/game/${mode}`);
  };

  return (
    <div className="landing-page">
      <h2>Select a Mode</h2>
      <div className="modes">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => handleModeSelect(mode)}
            className="mode-button"
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
