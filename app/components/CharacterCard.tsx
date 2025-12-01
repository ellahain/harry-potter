"use client"

import Image from "next/image";
import { Character } from "../lib/api";

export default function CharacterCard({ character }: { character: Character }) {
    return (
        <div className="border-4 border-pink-950 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative w-full h-64 mb-4">
                <Image
                    src={character.image || "/harry-potter-books.png"}
                    alt={character.name}
                    fill
                    className="object-cover rounded"
                />
            </div>

            <h3 className="font-bold text-xl text-center text-black">{character.name}</h3>
        </div>
    );
}