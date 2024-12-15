import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wordle from "../components/Wordle";
import { fetchRandomWordAndHint } from "../api/fetchWords";

const GamePage = () => {
  const { mode } = useParams();
  const [solution, setSolution] = useState(null);
  const [hint, setHint] = useState(null);

  useEffect(() => {
    const loadWordAndHint = async () => {
      try {
        const { word, hint } = await fetchRandomWordAndHint(mode);
        setSolution(word);
        setHint(hint);
      } catch (error) {
        console.error("Failed to load word and hint:", error);
      }
    };

    loadWordAndHint();
  }, [mode]);

  return (
    <div>
      {solution ? <Wordle solution={solution} hint={hint} /> : <p>Loading...</p>}
    </div>
  );
};

export default GamePage;
