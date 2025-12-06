/**
 * QUESTION FIVE - Ella
 * Fifth question in the Harry Potter house sorting quiz.
 * Presents five word choices that influence the user's house score.
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
import {QuestionSix as Six} from "./Six";
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionFive({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior questions
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 1);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value + 2);
        } else if (choice === 4) {
            setScore(value);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>Pick one of these words that you think best describes you:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/responsible.jpg" alt="The word responsible" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Responsible</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/loyal.jpg" alt="The word loyal" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Loyal</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/adventurous.jpg" alt="The word adventurous" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Adventurous</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/caring.jpg" alt="The word caring" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Caring</h3>
                </div>
            </div>
        </div> : <Six value={score}/>
        }</>
    )
}