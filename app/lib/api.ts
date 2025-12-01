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

export async function getCharactersByHouse(house: string): Promise<Character[]> {
    try {
        const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${house.toLowerCase()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch characters');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

export async function getCharacterById(id: string): Promise<Character | null> {
    try {
        const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch character with ID: ${id}`);
        }

        const data = await response.json();
        return data[0] || null; // API returns an array of one character, so we take the first element
    } catch (error) {
        console.error('Error fetching character:', error);
        return null;
    }
}