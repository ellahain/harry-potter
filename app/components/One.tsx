"use client"
import '../globals.css'
import Image from "next/image";
import {useState} from "react";
import Two from "../components/Two";


export default function QuestionOne({value}: { value: number }) {
    console.log(value)
    const imageStyling = "mx-10! w-[16vw]! h-[32vh]! inline! border-pink-950! rounded-t-md! border-6!  object-fill! hover:cursor-pointer!"
    const labelStyling = "bg-pink-950! rounded-b-md! text-white! p-1! w-[16vw]! mx-auto! mb-10! font-bold! text-xl! "

    const [score, setScore] = useState(value);
    const [nextQ, setNextQ] = useState(true);
    console.log("nextQ", nextQ);


    function addScore(choice: number) {
        console.log(choice);
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
                <h1 className="block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold font-[MedievalSharp]!">Choose a dessert</h1>
                <div className="flex! flex-row! justify-center! items-center!">
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
                <div className="flex flex-row justify-center items-center">
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
            <Two value={score}/>}
        </>
    )
}