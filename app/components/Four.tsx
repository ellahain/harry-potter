/**
 * QUESTION FOUR - Ella
 * Fourth question in the Harry Potter house sorting quiz.
 * Presents four choices of senses to remove that influence the user's house score.
 *
 * - Four sense options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Five component) after selection
 * Adds accumulated score from previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Five from "./Five";
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionFour({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 2);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>If you had to get rid of one sense, which would it be:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/sight.jpg" alt="Eye" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Sight</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/touch.jpg" alt="Hand touching water" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Touch</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/taste.jpg" alt="Mouth eating a fruit" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Taste</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/hearing.jpg" alt="Ear" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Hearing</h3>
                </div>
            </div>
        </div> : <Five value={score}/>}
        </>
    )
}