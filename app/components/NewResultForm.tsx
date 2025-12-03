"use client"
import {useState} from "react";
import createNewResult from "@/app/lib/createNewResult";



export default function NewResultForm({house}: { house: string }) {

    const [nickname, setNickname] = useState("");
    const [bool, setBool] = useState(true);
    async function addResult() {
        const status = await createNewResult(nickname, house)
        setBool(status)
    }


    return (
        <div className="flex flex-col items-center" style={{marginTop: '20px'}}>
            <div className="flex gap-2 items-center">
                <input className="border-2 border-black rounded p-2" onChange={(e) => setNickname(e.target.value)} value={nickname} placeholder={"Nickname"}/>
                <input className="border-2 border-black rounded p-2" readOnly={true} value={house}/>
                <button className="bg-white border-2 border-black p-2 hover:cursor-pointer font-[MedievalSharp]" onClick={addResult}>Submit</button>
            </div>
            {!bool ? <p className="mt-2 text-red-600 font-[MedievalSharp]">Nickname in use</p> : null}
        </div>
    )
}