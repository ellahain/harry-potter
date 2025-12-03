"use client"
import '../../globals.css'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Character, getCharactersByHouse } from "../../lib/api";
import CharacterCard from "../../components/CharacterCard";
import Link from "next/link";
import NewResultForm from "@/app/components/NewResultForm";

export default function House() {
    const params = useParams<{ house: string }>();
    const house = params.house;

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [bool, setBool] = useState<boolean>(false);

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
        <div className="min-h-screen bg-white w-full">
            {/* Header */}
            <div className={`${bgColor} text-white pt-16 pb-8 text-center`}>
                <h1 className="font-bold text-5xl mb-4 font-[MedievalSharp]">
                    Welcome to {house}!
                </h1>
                <p className="text-xl font-[MedievalSharp] mb-10!">
                    You&#39;ve been sorted into House {house}
                </p>
                <Link href="/" className="bg-white text-black p-3 font-[MedievalSharp] hover:bg-gray-200 cursor-pointer">Take the quiz again</Link>
            </div>

            <div className="flex justify-center" style={{marginTop: '30px'}}>
                <button className={`${bgColor} text-white p-3 hover:cursor-pointer font-[MedievalSharp]`} onClick={()=> {setBool(true)}}>Save your result</button>
            </div>
            {bool? <NewResultForm house={house}/>:null}

            {/* Characters Section */}
            <div className="w-full py-12 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center text-black font-[MedievalSharp]">
                    Notable {house} Members
                </h2>

                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-950"></div>
                        <p className="mt-4 text-black font-[MedievalSharp]">Loading characters...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-12">
                        <p className="text-red-600 text-xl font-[MedievalSharp]">{error}</p>
                    </div>
                )}

                {!loading && !error && characters.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-black text-xl font-[MedievalSharp]">
                            No characters found for {house}
                        </p>
                    </div>
                )}

                {!loading && !error && characters.length > 0 && (
                    <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                        {characters.map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}