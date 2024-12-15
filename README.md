# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Explanation

- `data/db.json` is the database file. We use json server to make API calls to this file. Can replace later with actual API calls.
- `npm install -g json-server` to install json server globally.
- run `json-server ./data/db.json --port 3001` , this will start a server with endpoints: http://localhost:3001/solutions
which gets you the solutions array.
- `src/hooks` has the hooks. `useWordle.js` hook has the game logic.
- useWorld takes in solution, and maintains states:
    turn -> current turn(6 guesses)
    currentGuess -> what user is currently typing
    guesses -> formatted guesses along with the color
    hisotry -> pass guesses but only the words
    isCorrect -> changes to true when user wins
    It returns {turn, currentGuess, guesses, isCorrect, handleKeyUp}
- `src/components/Wordle.js` is the main component. It uses the hook and renders the game. It takes in solution as prop.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
