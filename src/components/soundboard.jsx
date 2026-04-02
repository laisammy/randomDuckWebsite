import quack from "../assets/quack.mp3";
import boowomp from "../assets/boowomp.mp3";
import run from "../assets/run.mp3";
import splash from "../assets/splash.mp3";

import Navbar from "./navbar";

export default function Soundboard() {
    const sounds = [
        { name: "Quack", file: quack },
        { name: "Boowomp", file: boowomp },
        { name: "Run", file: run },
        { name: "Splash", file: splash },
    ];

    const playSound = (file) => {
        const audio = new Audio(file);
        audio.play();
    };

    return (
        <div>
            <Navbar/>
            <div className="bg-linear-to-b from-amber-200 to-stone-200 min-h-screen">
                <div className="text-stone-800 flex flex-col justify-center items-center gap-3">
                    <div className="font-climate text-3xl text-stone-800 mt-20">
                        Duck Soundboard
                    </div>

                    <div className="font-lexend">
                        A duck-themed soundboard!
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-16 m-20">
                    {sounds.map((sound, index) => (
                        <button
                            key={index}
                            onClick={() => playSound(sound.file)}
                            className="px-6 py-4 bg-amber-300 hover:bg-amber-400 text-stone-800 font-lexend rounded-lg shadow-md transition-all"
                        >
                            {sound.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}