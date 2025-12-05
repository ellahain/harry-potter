/**
 * HOME PAGE
 * This is the landing page for the Harry Potter House Sorting application.
 * It allows users to either take the sorting quiz or retrieve past results by nickname.
 *
 * Key Features:
 * - Displays an autoplay video of Harry Potter content & background - Ella
 * - See past results using MongoDB - Ella
 * - Styling - Greta
 *
 * Uses Next.js router for client-side navigation
 * - Custom getSaved utility for fetching saved results
 */

"use client"
import './globals.css'
import Link from "next/link";
import {useState} from "react";
import getSaved from "@/app/lib/getSaved";
import {useRouter} from "next/navigation";


export default function Home() {
    // Manages state - tracks user input for nickname lookup & starts quiz
    const [nickname, setNickname] = useState("");

    const router = useRouter();
    /**
     * Retrieves saved quiz result by nickname
     * 1. Calls getSaved utility with nickname from state
     * 2. Receives result data
     * 3. Navigates to house results page with the retrieved data
     */
    async function getResult() {
        const data = await getSaved({nickname});
        router.push(`results/${data}`)
    }

    return (
        /**
         * Displays different buttons routing between starting quiz/retrieving results
         * Styling for home page
        */
        <div className="bg-[url(/hogwarts.jpeg)] bg-cover h-[100vh] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <video width="470px" height="220px" muted autoPlay style={{marginBottom: '-100px', position: 'relative', zIndex: 1}}>
                    <source src="/harry.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <Link href="/quiz" className="bg-pink-950 text-white p-4 rounded font-[MedievalSharp] text-lg hover:bg-pink-900 cursor-pointer" style={{marginBottom: '40px', position: 'relative', zIndex: 10}}>
                    Find out your House!
                </Link>
                <div className="flex flex-col items-center w-[300px]">
                    <input
                        className="w-full h-10 p-2 mb-2 bg-white border-2 border-black rounded text-center"
                        placeholder="For Past Result: Enter Nickname"
                        onChange={(e) => setNickname(e.target.value)}
                        value={nickname}
                    />
                    <button
                        className="w-full p-2 bg-pink-950 text-white border-2 border-pink-950 rounded font-[MedievalSharp] hover:bg-pink-900 cursor-pointer"
                        onClick={getResult}
                    >
                        Get Result
                    </button>
                </div>
            </div>
        </div>
    );
}