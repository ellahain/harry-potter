/**
 * QUESTION TEN - Ella
 * Final question in the Harry Potter house sorting quiz.
 * Presents four tech company choices and calculates final house result.
 *
 * - Four tech company faction options with logos
 * - Each choice adds/subtracts final points to score
 * - Calculates final house based on total score
 * - Navigates to results page with determined house
 * - value: Accumulated score from all previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation"
import getResult from "../lib/getResult";
import {divStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionTen({value}: { value: number }) {
    const [score, setScore] = useState(value);
    const router = useRouter();

    /**
     * Processes final choice, calculates house, and navigates to results
     * 1. Updates score based on choice (same pattern as other questions)
     * 2. Calls getResult utility to determine house from final score
     * 3. Navigates to results page with determined house name
     */
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        }
        else if (choice === 2) {
            setScore(value + 1);
        }
        else if (choice === 3) {
            setScore(value + 2);
        }
        else if (choice === 4) {
            setScore(value - 1);
        }

        // getResult function takes final score and returns house name as string
        const house = getResult(score);

        // Push to results route with house name
        router.push(`/results/${house}`);
    }

    return (
        <div className="text-center">
            <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-3xl! font-bold font-[MedievalSharp]!">If the world was split into factions based on the technological powerhouses where would you want to live:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/google.png" alt="Google Logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Google Land</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/lockheed.jpg" alt="Lockheed Martin logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Lockheed Martin Metropolis</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/apple1.png" alt="App Logo" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Appletopia</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/palentir.jpg" alt="Palentir Logo" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Palentiria</h3>
                </div>
            </div>
        </div>
    )
}