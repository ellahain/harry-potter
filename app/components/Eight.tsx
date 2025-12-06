/**
 * QUESTION EIGHT - Ella
 * 8th question in the Harry Potter house sorting quiz.
 * Presents four crises choices that influence the user's house score.
 *
 * - Four crises options with images
 * - Each choice adds/subtracts different points to running score
 * - Advances to next question (Four component) after selection
 * Adds accumulated score from previous questions
 */

"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Nine from "./Nine"
import {divStyling, headerStyling, imageStyling, labelStyling} from "@/app/components/One";


export default function QuestionEight({value}: { value: number }) {

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);

    // same logic as prior component
    function addScore(choice: number) {
        if (choice === 1) {
            setScore(value + 1);
        } else if (choice === 2) {
            setScore(value - 1);
        } else if (choice === 3) {
            setScore(value);
        } else if (choice === 4) {
            setScore(value + 2);
        }

        setNextQ(false)

    }

    return (
        <>{nextQ ? <div className="text-center">
            <h1 className={headerStyling}>If you could solve only one of these world problems today, which would you choose:</h1>
            <div className={divStyling}>
                <div className="inline!">
                    <button onClick={() => addScore(1)}>
                        <Image src="/climate.jpeg" alt="Climate Change" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Climate Change</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(2)}>
                        <Image src="/food.jpg" alt="Food Insecurity" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Food Insecurity</h3>
                </div>
            </div>
            <div className={divStyling}>
                <div className="inline">
                    <button onClick={() => addScore(3)}>
                        <Image src="/healthcare.jpg" alt="Healthcare Access" width={200} height={200}
                               className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Healthcare Access</h3>
                </div>
                <div className="inline">
                    <button onClick={() => addScore(4)}>
                        <Image src="/armed.jpg" alt="Armed Violence" width={200} height={200} className={imageStyling}/>
                    </button>
                    <h3 className={labelStyling}>Armed Violence</h3>
                </div>
            </div>
        </div> : <Nine value={score}/>}
        </>
    )
}