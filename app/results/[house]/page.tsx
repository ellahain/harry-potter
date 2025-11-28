"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Character, getCharactersByHouse } from "../../lib/api";
import CharacterCard from "../../components/CharacterCard";

export default function House() {
    const params = useParams<{ house: string }>();
    const house = params.house;

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                setLoading(true);
                const data = await getCharactersByHouse(house);
                setCharacters(data);
            } catch (err) {
                setError("Failed to load characters");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacters();
    }, [house]);

    // House colors for styling
    const houseColors: Record<string, string> = {
        Gryffindor: "bg-red-700",
        Hufflepuff: "bg-yellow-500",
        Ravenclaw: "bg-blue-700",
        Slytherin: "bg-green-700"
    };

    const bgColor = houseColors[house] || "bg-gray-700";

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className={`${bgColor} text-white py-16 text-center`}>
                <h1 className="font-bold text-5xl mb-4">
                    Welcome to {house}!
                </h1>
                <p className="text-xl">
                    You've been sorted into House {house}
                </p>
            </div>

            {/* Characters Section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Notable {house} Members
                </h2>

                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        <p className="mt-4 text-gray-600">Loading characters...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-600 text-xl">{error}</p>
                    </div>
                )}

                {!loading && !error && characters.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-xl">
                            No characters found for {house}
                        </p>
                    </div>
                )}

                {!loading && !error && characters.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}