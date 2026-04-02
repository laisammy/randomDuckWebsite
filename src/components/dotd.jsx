import { useState, useEffect } from "react";

export default function DuckOfTheDay() {
    const [duckUrl, setDuckUrl] = useState("");
    const [rating, setRating] = useState(0);

    const generateDuck = () => {
        const id = Math.floor(Math.random() * 200) + 1;
        return `https://random-d.uk/api/${id}.jpg`;
    };

    useEffect(() => {
        const storedDuck = localStorage.getItem("duckOfTheDay");
        const storedDate = localStorage.getItem("duckOfTheDayDate");
        const storedRating = localStorage.getItem("duckOfTheDayRating");
        const today = new Date().toDateString();

        if (storedDuck && storedDate === today) {
            setDuckUrl(storedDuck);
            if (storedRating) setRating(Number(storedRating));
        } else {
            const newDuck = generateDuck();
            setDuckUrl(newDuck);
            localStorage.setItem("duckOfTheDay", newDuck);
            localStorage.setItem("duckOfTheDayDate", today);
            localStorage.removeItem("duckOfTheDayRating");
        }
    }, []);

    const handleRating = (value) => {
        setRating(value);
        localStorage.setItem("duckOfTheDayRating", value);
    };

    return (
        <div className="flex flex-col items-center mt-16">
            <h2 className="font-climate text-3xl text-stone-800 mb-10">
                Duck of the Day
            </h2>

            <div className="flex flex-row items-center gap-20">
                <div className="bg-white shadow-lg rounded-xl p-6 w-[350px] h-[350px] flex items-center justify-center">
                    {duckUrl ? (
                        <img 
                            src={duckUrl}
                            alt="Duck of the Day"
                            className="max-w-full max-h-full rounded-lg"
                        />
                    ) : (
                        <div className="font-lexend text-stone-500">
                            Loading today's duck...
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center">
                    <p className="font-lexend text-stone-700 mt-4">
                        Rate today's duck
                    </p>

                    <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                onClick={() => handleRating(value)}
                                className={`text-3xl transition ${
                                    value <= rating ? "text-amber-500" : "text-stone-400"
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <p className="font-lexend text-stone-600 mt-3">
                        {rating > 0 ? `You rated this duck ${rating}/5` : "No rating yet"}
                    </p>
                </div>
            </div>

            <p className="font-lexend text-stone-700 mt-4">
                Come back tomorrow for a new duck!
            </p>
        </div>
    );
}
