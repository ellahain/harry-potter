/**
 * QUESTION ONE - Ella
 * First question in the Harry Potter house sorting quiz.
 * Presents four dessert choices that influence the user's house score.
 *
 * - Four dessert options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Two component) after selection
 * Current accumulated score from previous questions (0 for first question)
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Two from "../components/Two";

export const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6!  object-fill! hover:cursor-pointer!"
export const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl! "
export const headerStyling = "block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold font-[MedievalSharp]!"
export const divStyling = "flex flex-row justify-center items-center"

export default function QuestionOne({value}: { value: number }) {
    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    /**
     * Processes user's dessert choice and updates score
     * 1. If/else chain determines score adjustment based on choice
     * 2. Updates score state with new total
     * 3. Sets nextQ to false to trigger next question display
     */
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 2);
        }
        else if (choice === 2) {
            setScore(value - 1);
        }
        else if (choice === 3) {
            setScore(value);
        }
        else if (choice === 4) {
            setScore(value + 1);
        }

        // Advance to Next Question
        setNextQ(false)
    }

    return (
        <>{nextQ ?
            <div className="text-center">
                <h1 className={headerStyling}>Choose a dessert</h1>
                <div className={divStyling}>
                    <div className="inline!">
                        <button onClick={() => addScore(1)}>
                            <Image src="/cupcakes.jpg" alt="Strawberry Cupcakes" width={200} height={200}
                                   className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Strawberry Cupcakes</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(2)}>
                            <Image src="/keylime.jpg" alt="Key Lime Pie" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Key Lime Pie</h3>
                    </div>
                </div>
                <div className={divStyling}>
                    <div className="inline">
                        <button onClick={() => addScore(3)}>
                            <Image src="/icecream.jpg" alt="Ice Cream" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Ice Cream</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(4)}>
                            <Image src="/brownies.jpg" alt="Brownies" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Brownies</h3>
                    </div>
                </div>
            </div> :
            // Next Question Component
            <Two value={score}/>}
        </>
    )
}