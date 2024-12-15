const BASE_URL = "http://localhost:3001";

/**
 * Fetch all available modes from the server.
 * @returns {Promise<string[]>} - An array of mode names.
 */
export const fetchModes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/modes`);
    if (!response.ok) throw new Error("Failed to fetch modes.");
    const modes = await response.json();
    return modes.map((mode) => mode.name);
  } catch (error) {
    console.error("Error fetching modes:", error);
    throw error;
  }
};

/**
 * Fetch a random word and hint for a specific mode.
 * @param {string} mode - The name of the mode (e.g., "STEM", "SCIENTISTS").
 * @returns {Promise<object>} - An object with the word and hint.
 */
export const fetchRandomWordAndHint = async (mode) => {
  try {
    const response = await fetch(`${BASE_URL}/modes`);
    if (!response.ok) throw new Error("Failed to fetch modes.");
    const modes = await response.json();

    const selectedMode = modes.find((m) => m.name === mode);
    if (!selectedMode || selectedMode.words.length === 0) {
      throw new Error(`No words available for mode: ${mode}`);
    }

    const randomIndex = Math.floor(Math.random() * selectedMode.words.length);
    const randomWord = selectedMode.words[randomIndex];
    return randomWord; // { word: "react", hint: "A JavaScript library for building user interfaces" }
  } catch (error) {
    console.error("Error fetching random word and hint:", error);
    throw error;
  }
};
