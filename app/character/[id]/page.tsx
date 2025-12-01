"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {Character, getCharacterById} from "@/app/lib/api";

export default function CharacterDetail() {
    const params = useParams<{ id: string }>();
    const characterId = params.id;

    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCharacter() {
            if (!characterId) return;

            try {
                setLoading(true);
                const data = await getCharacterById(characterId);
                if (data) {
                    setCharacter(data);
                } else {
                    setError("Character not found.");
                }
            } catch (err) {
                setError("Failed to load character details.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacter();
    }, [characterId]);

    if (loading) {
        return (
            <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                <p className="mt-4 text-gray-600">Loading character details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-red-600 text-xl">{error}</p>
            </div>
        );
    }

    if (!character) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-600 text-xl">
                    No character data available.
                </p>
            </div>
        );
    }


    const houseTextColors: Record<string, string> = {
        Gryffindor: "text-red-700",
        Hufflepuff: "text-yellow-600",
        Ravenclaw: "text-blue-700",
        Slytherin: "text-green-700"
    };

    const houseTextColor = houseTextColors[character.house] || "text-gray-900";

    // Simple layout to display some details
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        {character.image ? (
                            <img
                                src={character.image}
                                alt={character.name}
                                className="h-96 w-full object-cover md:w-96"
                            />
                        ) : (
                            <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500 text-2xl">No Image</span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="p-8">
                        <h1 className={`font-extrabold text-4xl mb-2 ${houseTextColor}`}>{character.name}</h1>
                        <p className="font-bold text-xl text-black mb-6">{character.species}</p>

                        <div className="space-y-4 text-black">
                            <p><strong>House:</strong> <span className={`font-semibold ${houseTextColor}`}>{character.house || 'N/A'}</span></p>
                            <p><strong>Patronus:</strong> {character.patronus || 'N/A'}</p>
                            <p><strong>Ancestry:</strong> {character.ancestry || 'N/A'}</p>
                            <p><strong>Actor:</strong> {character.actor || 'N/A'}</p>

                            {character.wand.wood && (
                                <p>
                                    <strong>Wand:</strong> {character.wand.wood} wood, {character.wand.core} core
                                    {character.wand.length ? ` (${character.wand.length} inches)` : ''}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}