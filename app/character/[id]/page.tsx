/**
 * CHARACTER DETAIL PAGE - Alena
 * Displays comprehensive information about a single Harry Potter character.
 * Shows character portrait, biographical details, wand information, and house affiliation.
 *
 * - Dynamic route based on character ID from URL
 * - Fetches detailed character data from HP API
 *
 * Styling - Greta
 * API uses getCharacterById function from api.ts
 */

"use client";
import '../../globals.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {Character, getCharacterById} from "@/app/lib/api";
import Image from "next/image";

export default function CharacterDetail() {
    // Extract character ID from URL params using Next.js useParams hook.
    const params = useParams<{ id: string }>();
    const characterId = params.id;
    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        /**
         * Fetches individual character details from HP API
         * 3. Call API utility with character ID
         * 4. If data returned: store in character state
         * 5. If no data: set error message (character doesn't exist)
         *
         * Async function required for API call.
         * If/else checks handle case where API succeeds but returns null (non-existent character).
         * Try-catch-finally ensures loading state is cleared even on error
         */
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
            <div className="bg-[url(/background2.jpg)] bg-contain bg-center bg-repeat min-h-screen w-full text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-950"></div>
                <p className="mt-4 text-white font-[MedievalSharp]">Loading character details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[url(/background2.jpg)] bg-contain bg-center bg-repeat min-h-screen w-full text-center py-20">
                <p className="text-red-600 text-xl font-[MedievalSharp]">{error}</p>
            </div>
        );
    }

    if (!character) {
        return (
            <div className="bg-[url(/background2.jpg)] bg-contain bg-center bg-repeat min-h-screen w-full text-center py-20">
                <p className="text-white text-xl font-[MedievalSharp]">
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

    // Dynamic Text Color Selection
    const houseTextColor = houseTextColors[character.house] || "text-gray-900";

    return (
        <div className="bg-[url(/background2.jpg)] bg-contain bg-center bg-repeat min-h-screen w-full flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <div className="relative h-96 w-full md:w-96">
                            <Image
                                src={character.image || "/harry-potter-books.png"}
                                alt={character.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-8">
                        <h1 className={`font-extrabold text-4xl mb-2 font-[MedievalSharp] ${houseTextColor}`}>{character.name}</h1>
                        <p className="font-bold text-xl text-black mb-6 font-[MedievalSharp]">{character.species}</p>

                        <div className="space-y-4 text-black font-[MedievalSharp]">
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