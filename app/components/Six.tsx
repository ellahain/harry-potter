/**
 * QUESTION SIX - Ella
 * Sixth question in the Harry Potter house sorting quiz.
 * Presents four new word choices that influence the user's house score.
 *
 * - Four word options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Four component) after selection
 * Adds accumulated score from previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Seven from "./Seven"
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export function QuestionSix({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value + 1);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>Pick the word you think others would describe you as:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/compassionate.jpg" alt="The word compassionate" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Compassionate</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/determined.jpg" alt="The word determined" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Determined</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/honest.jpg" alt="The word honest" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Honest</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/impulsive.jpg" alt="The word impulsive" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Impulsive</h3>
                </div>
            </div>
        </div> : <Seven value={score}/>}
        </>
    )
}