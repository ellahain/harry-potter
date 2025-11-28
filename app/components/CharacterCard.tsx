"use client"

import Image from "next/image";
import { Character } from "../lib/api";

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <div className="border-4 border-pink-950 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-full h-64 mb-4">
                {character.image ? (
                    <Image
                        src={character.image}
                        alt={character.name}
                        fill
                        className="object-cover rounded"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                        <span className="text-gray-500">No Image</span>
                    </div>
                )}
            </div>

            <h3 className="font-bold text-xl text-center text-black">{character.name}</h3>
        </div>
    );
}