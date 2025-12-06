/**
 * QUESTION THREE - Ella
 * Third question in the Harry Potter house sorting quiz.
 * Presents four movie choices that influence the user's house score.
 *
 * - Four movie options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Four component) after selection
 * Adds accumulated score from previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Four from "./Four";
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionThree({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value - 1);
        } else if (choice === 2) {
            setScore(value + 2);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>Choose one of these classic movies</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/godfather.jpg" alt="The Godfather" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Godfather</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/exorcist.jpg" alt="The Exorcist" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Exorcist</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/wizard.jpg" alt="The Wizard of Oz" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>The Wizard of Oz</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/twelve.jpg" alt="12 Angry Men" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>12 Angry Men</h3>
                </div>
            </div>
        </div> : <Four value={score}/>}
        </>
    )
}