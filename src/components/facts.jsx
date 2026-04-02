import { useState } from "react"

export default function Facts() {
    const facts = [
        "Ducks have waterproof feathers thanks to a special oil they produce.",
        "A group of ducks on land is called a 'brace' or a 'badling'.",
        "Ducks can see in color and have nearly 360° vision.",
        "Some ducks can fly up to 60 miles per hour.",
        "Ducklings imprint on the first moving thing they see after hatching.",
        "Male ducks are called drakes, females are hens, and babies are ducklings.",
        "Ducks sleep with one eye open to stay alert for predators.",
        "The quack of a duck does echo, despite the myth.",
        "Ducks have three eyelids to help them see underwater.",
        "Some duck species migrate thousands of miles every year."
    ];

    const [fact, setFact] = useState(facts[0]);

    const generateFact = () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        setFact(facts[randomIndex]);
    }

    return(
        <div className="flex flex-col items-center mt-16">
            <div className="font-climate text-2xl text-stone-800 m-3 mb-10">
                A random duck fact!
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 w-[450px] min-h-[150px] flex items-center justify-center text-center">
                <p className="font-lexend text-stone-700 text-lg">
                    {fact}
                </p>
            </div>
            <button
                onClick={generateFact}
                className="mt-6 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-stone-800 font-lexend rounded-lg shadow-md transition-all"
            >
                New Duck Fact
            </button>
        </div>
    )
}