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

