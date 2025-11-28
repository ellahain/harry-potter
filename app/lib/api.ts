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