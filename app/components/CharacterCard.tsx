/**
 * CHARACTER CARD - Greta
 * Reusable card component that displays a single Harry Potter character.
 * Used to show characters belonging to a specific Hogwarts house.
 *
 * Key Features:
 * - Displays character image or book stack if no image available
 * - Shows character name
 * - Clickable card that navigates to detailed character page - Alena
 * - Consistent styling with house theme
 *
 * Uses Character interface from api.ts
 * Character object containing all character data from HP API
 */


"use client"
import '../globals.css'
import Image from "next/image";
import Link from "next/link";
import { Character } from "../lib/api";

export default function CharacterCard({ character }: { character: Character }) {
    return (
        /**
         * Clickable card wrapper - Alena
         * Link component wraps entire card to make it clickable.
         * Navigates to dynamic route using character ID for detailed character page.
         */
        <Link href={`/character/${character.id}`}>
            {/* Character Card - Greta */}
            {/* Displays name and image from HP API (if no image available shows book stack) */}
            <div className="border-4 border-pink-950 rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={character.image || "/harry-potter-books.png"}
                        alt={character.name}
                        fill
                        className="object-cover rounded"
                    />
                </div>
                <h3 className="font-bold text-xl text-center text-black font-[MedievalSharp]">{character.name}</h3>
            </div>
        </Link>
    );
}