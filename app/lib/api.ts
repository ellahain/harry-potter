/**
 * API UTILITIES AND TYPE DEFINITIONS
 * Provides TypeScript interfaces and API functions for fetching
 * Harry Potter character data from the HP API (https://hp-api.onrender.com).
 *
 * - Character interface defines structure of character data - Greta
 * - getCharactersByHouse fetches all characters in a specific house - Greta
 * - getCharacterById fetches detailed data for a single character - Alena
 *
 * API Endpoints Used:
 * - /api/characters/house/{house} - Get characters by house
 * - /api/character/{id} - Get specific character by ID
 */

/**
 * Character Interface - Greta
 * Structure matches the HP API response format.
 */
export interface Character {
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;
}

/**
 * Fetches all characters belonging to a specific Hogwarts house - Greta
 *
 * @param house - Name of the Hogwarts house (Gryffindor, Hufflepuff, Ravenclaw, Slytherin)
 * @returns Promise<Character[]> - Array of character objects, empty array on error
 *
 * 1. Converts house name to lowercase to match API requirements
 * 2. Fetches data from HP API house endpoint
 * 3. Validates response status
 * 4. Parses JSON response into Character array
 *
 * Async function required for API call.
 * Try-catch ensures app doesn't crash on API failures.
 * Empty array return on error for failures.
 */
export async function getCharactersByHouse(house: string): Promise<Character[]> {
    try {
        // API Request
        // HP API requires lowercase house names in endpoint
        const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`);

        // Check HTTP status before parsing.
        if (!response.ok) {
            throw new Error('Failed to fetch characters');
        }

        // Convert JSON response to Character array.
        const data = await response.json();
        return data;
    } catch (error) {
        // Error Handling
        console.error('Error fetching characters:', error);
        return [];
    }
}

/**
 * Fetches detailed data for a single character by their unique ID - Alena
 *
 * @param id - Unique character identifier from HP API
 * @returns Promise<Character | null> - Character object or null if not found/error
 *
 * 1. Fetches data from HP API character endpoint with ID
 * 2. Validates response status
 * 3. Parses JSON response (API returns array with single character)
 * 4. Extracts first element from array or returns null
 * 5. Returns null on any error
 *
 * API returns array with one element rather than single object, so extract [0].
 */
export async function getCharacterById(id: string): Promise<Character | null> {
    try {
        // API Request
        const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

        // Validate HTTP status
        if (!response.ok) {
            throw new Error(`Failed to fetch character with ID: ${id}`);
        }

        // API returns single-element array, not object. Extract first element.
        // Use || null to handle empty array edge case
        const data = await response.json();
        return data[0] || null; // API returns an array of one character, so we take the first element
    } catch (error) {
        // Error Handling
        console.error('Error fetching character:', error);
        return null;
    }
}