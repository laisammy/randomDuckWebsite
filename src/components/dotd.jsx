import { useState, useEffect } from "react";

export default function DuckOfTheDay() {
    const [duckUrl, setDuckUrl] = useState("");

    const generateDuck = () => {
        const id = Math.floor(Math.random() * 200) + 1;
        return `https://random-d.uk/api/${id}.jpg`;
    };

    useEffect(() => {
        const stored = localStorage.getItem("duckOfTheDay");
        const storedDate = localStorage.getItem("duckOfTheDayDate");
        const today = new Date().toDateString();

        if (stored && storedDate === today) {
            setDuckUrl(stored);
        } else {
            const newDuck = generateDuck();
            setDuckUrl(newDuck);
            localStorage.setItem("duckOfTheDay", newDuck);
            localStorage.setItem("duckOfTheDayDate", today);
        }
    }, []);

    return (
        <div className="flex flex-col items-center mt-16">
            <h2 className="font-climate text-3xl text-stone-800 mb-4">
                Duck of the Day
            </h2>

            <div className="bg-white shadow-lg rounded-xl p-6 w-[500px] h-[500px] flex items-center justify-center">
                {duckUrl ? (
                    <img src={duckUrl} alt="Duck of the Day" className="max-w-full max-h-full rounded-lg"/>
                ) : (
                    <div className="font-lexend text-stone-500">
                        Loading today’s duck...
                    </div>
                )}
            </div>

            <p className="font-lexend text-stone-700 mt-4">
                Come back tomorrow for a new duck
            </p>
        </div>
    );
}

