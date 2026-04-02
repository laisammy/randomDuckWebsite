import { useState, useEffect } from "react";

export default function Viewer() {
    const [duckUrl, setDuckUrl] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchDuck = async () => {
        setLoading(true);

        const id = Math.floor(Math.random() * 200) + 1;
        setDuckUrl(`https://random-d.uk/api/${id}.jpg`);

        setLoading(false);
    };

    useEffect(() => {
        fetchDuck();
    }, []);

    return (
        <div className="flex flex-col items-center mt-16">
            <div className="font-climate text-2xl text-stone-800 m-3 mb-10">
                Fetch a duck!
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 w-[450px] h-[450px] flex items-center justify-center">
                {loading ? (
                    <div className="text-stone-500 font-lexend">Fetching duck...</div>
                ) : (
                    <img
                        src={duckUrl}
                        alt="Random Duck"
                        className="max-w-full max-h-full rounded-lg transition-all duration-300"
                    />
                )}
            </div>

            <button
                onClick={fetchDuck}
                className="mt-6 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-800 font-lexend rounded-lg shadow-md transition-all"
            >
                Fetch New Duck
            </button>
        </div>
    );
}