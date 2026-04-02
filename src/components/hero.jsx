import Viewer from "./viewer"
import Facts from "./facts"
import Navbar from "./navbar"
import DuckOfTheDay from "./dotd"

export default function hero() {
    return(
        <div>
            <Navbar/>
            <div className="bg-linear-to-b from-amber-200 to-stone-200 min-h-screen">
                <div className="text-stone-800 flex flex-col justify-center items-center gap-3">
                    <div className="font-climate text-4xl mt-20">
                        Welcome to the Duckiverse
                    </div>
                    <div className="font-lexend">
                        Fetch a new duck anytime (or learn more about ducks!)
                    </div>
                </div>
                <div>
                    <DuckOfTheDay />
                </div>
                <div className="flex flex-row justify-center items-center gap-20 mb-10">
                    <Viewer />
                    <Facts />
                </div>
            </div>
        </div>
    )
}