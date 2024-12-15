import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution, hint }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)
  const [showHint, setShowHint] = useState(false);
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  
  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      <button onClick={() => setShowHint((prev) => !prev)} className="hint-button">
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>
      {showHint && <p className="hint">Hint: {hint}</p>}
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}