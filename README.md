# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Explanation

- **Database (`data/db.json`)**:
  - This file serves as the local database. We use [json-server](https://github.com/typicode/json-server) to simulate API calls. 
    - It contains `letters` and `modes`:
    - **`modes`**: Includes STEM, SCIENTISTS, and GENERAL categories. Each mode has specific words and hints. 
    - **`letters`**: Contains all English letters used for the keypad.

- **Steps to Set Up JSON Server**:
  1. Install JSON server globally: `npm install -g json-server`
  2. Run the server: `json-server ./data/db.json --port 3001`
  3. The following endpoints will be available:
     - **`http://localhost:3001/modes`**: Returns the list of modes and their associated words and hints.

---

### **Key Features**

1. **Dynamic Modes**:
   - The game supports different modes: STEM, SCIENTISTS, and GENERAL.
   - Each mode includes a set of challenging words and optional hints.
   - Modes are fetched dynamically from the database, and the game adjusts based on the selected mode.

2. **Game Logic (`src/hooks/useWordle.js`)**:
   - The core game logic is encapsulated in a custom hook.
   - **State Variables**:
     - `turn`: Tracks the current turn (maximum 6 guesses).
     - `currentGuess`: Stores the word the user is currently typing.
     - `guesses`: Contains formatted guesses with associated colors (green, yellow, gray).
     - `history`: Contains a list of previously guessed words.
     - `isCorrect`: Becomes `true` when the user correctly guesses the solution.
   - **Returned Methods**:
     - `handleKeyUp`: Handles user input via keyboard.

3. **Main Components**:
   - **`src/components/Wordle.js`**: The primary game component. It uses the `useWordle` hook and manages the game UI, including the grid, keypad, and modal.
   - **`src/components/Modal.js`**: Displays the result (win/lose) and provides a "Close" button to restart or navigate.
   - **`src/components/Grid.js`**: Renders the game grid with the user's guesses.
   - **`src/components/Keypad.js`**: Renders the virtual keyboard.
   - **`src/components/Header.js`**: Displays the title "Wordle" and a link to navigate back to the home screen.
   - **`src/pages/LandingPage.js`**: Allows users to select a mode before starting the game.
   - **`src/pages/GamePage.js`**: Manages the Wordle game for the selected mode.

4. **Hint System**:
   - Each word includes an optional hint.
   - The user can toggle the hint button to view or hide hints.

---

## Available Scripts

In the project directory, you can run:

### **`npm start`**

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

### **JSON Server**

Run the following command to start the JSON server:
```bash
json-server ./data/db.json --port 3001
```