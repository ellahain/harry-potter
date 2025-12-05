/**
 * QUIZ PAGE
 * Initializes the quiz with score of 0 and renders the first question.
 *
 * - Sets initial score to 0
 * - Renders first question component (One)
 * - Provides themed background for entire quiz
 */

"use client"

import One from "../components/One";


export default function Quiz(){

    const score = 0;
    return(
        <div className="bg-[url(/background2.jpg)]! h-[100vh]!">
        <One value={score}/>
        </div>
    )
}

