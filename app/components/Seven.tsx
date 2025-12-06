/**
 * QUESTION SEVEN - Ella
 * Seventh question in the Harry Potter house sorting quiz.
 * Presents four book choices that influence the user's house score.
 *
 * - Four book options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Four component) after selection
 * Adds accumulated score from previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Eight from "./Eight"
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionSeven({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value);
        } else if (choice === 2) {
            setScore(value + 1);
        } else if (choice === 3) {
            setScore(value - 1);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>If you had to get rid of one of these classics which would you choose:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/catcher.png" alt="The Catcher in the Rye" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Catcher in the Rye</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/pride.jpg" alt="Pride & Prejudice" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Pride & Prejudice</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/animal.jpg" alt="Animal farm" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Animal Farm</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/gatsby.jpg" alt="The Great Gatsby" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Great Gatsby</h3>
                </div>
            </div>
        </div> : <Eight value={score}/>}
        </>
    )
}