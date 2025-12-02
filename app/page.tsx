"use client"
import Link from "next/link";



export default function Home() {

    const titleStyle = "block! bg-pink-950! text-white! py-5! mb-6! text-4xl! font-bold font-[MedievalSharp]!"

    return (
    <div className="bg-[url(/hogwarts.jpeg)] bg-cover h-[100vh] mx-auto! text-center!">

        <video width="470px" height="220px" muted autoPlay className="mx-auto! mt-0!">
            <source src="/harry.webm" type="video/webm"/>
            Your browser does not support the video tag.
        </video>
        <Link href="/quiz" className="bg-pink-950 text-white p-4 m-4 rounded">Find out your House!</Link>
    </div>
    );
}
