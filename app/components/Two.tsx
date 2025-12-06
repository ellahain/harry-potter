/**
 * QUESTION TWO - Ella
 * Second question in the Harry Potter house sorting quiz.
 * Presents four season choices that influence the user's house score.
 *
 * - Four season options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Three component) after selection
 * Adds accumulated score from previous questions
 */

"use client"

import Image from "next/image";
import {useState} from "react";
import Three from "../components/Three";
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionTwo({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);


    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 2);
        } else if (choice === 2) {
            setScore(value);
        } else if (choice === 3) {
            setScore(value - 1);
        } else if (choice === 4) {
            setScore(value + 1);
        }

        setNextQ(false)

    }

    return (
        <> {nextQ ? <div className="text-center">
                <h1 className={headerStyling}>Select a season</h1>
                <div className={divStyling}>
                    <div className="inline!">
                        <button onClick={() => addScore(1)}>
                            <Image src="/spring.jpg" alt="Spring" width={200} height={200}
                                   className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Spring</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(2)}>
                            <Image src="/summer.jpg" alt="Summer" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Summer</h3>
                    </div>
                </div>
                <div className={divStyling}>
                    <div className="inline">
                        <button onClick={() => addScore(3)}>
                            <Image src="/fall.jpg" alt="Fall" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Fall</h3>
                    </div>
                    <div className="inline">
                        <button onClick={() => addScore(4)}>
                            <Image src="/winter.jpg" alt="Winter" width={200} height={200} className={imageStyling}/>
                        </button>
                        <h3 className={labelStyling}>Winter</h3>
                    </div>
                </div>
            </div> :
            <Three value={score}/>}
        </>
    )
}