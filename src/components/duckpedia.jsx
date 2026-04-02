import Navbar from "./navbar"

export default function Duckpedia() {
    return(
        <div>
            <Navbar />
            <div className="bg-linear-to-b from-amber-200 to-stone-200">
                <div className="text-stone-800 flex flex-col justify-center items-center gap-3">
                    <div className="font-climate text-3xl text-stone-800 mt-15 mb-8">
                        Learn more about ducks!
                    </div>
                    <div className="flex flex-row items-center justify-center gap-3">
                        <img src="src/assets/303.jpg" className="w-1/4 h-1/4"></img> 
                        <img src="src/assets/529.jpg" className="w-1/4 h-1/4"></img>
                        <img src="src/assets/410.jpg" className="w-1/4 h-1/4"></img>
                    </div>
                    <div className="font-lexend m-8 ml-25 mr-25 text-center">
                        Ducks are one of the most beloved waterbirds around the world. They are known for their cheerful waddles, expressive quacks and remarkable adaptability. 
                        They belong to the bird family Anatidae, which also includes geese and swans. Ducks can be found on every continent except Antartica, thriving in environments ranging from quiet village ponds to vast wetlands and bustling city parks!
                    </div>

                    <div className="flex flex-row justify-center items-center text-center mt-8 ml-8 mr-8 gap-3">
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="font-lexend font-bold text-3xl text-stone-800">
                                Where Ducks Live
                            </div>
                            <div className="font-lexend text-center">
                                Ducks are incredibly versatile and live in a wide variety of habitats, including:
                                <ol className="m-2">
                                    <li>&#8226; Freshwater ponds and lakes</li>
                                    <li>&#8226; Rivers and marshes</li>
                                    <li>&#8226; Coastal shorelines and estuaries</li>
                                    <li>&#8226; Urban parks and gardens</li>
                                    <li>&#8226; Rice fields and agricultural wetlands</li>
                                </ol>
                                Many species migrate seasonally, travelling thousands of miles between breeding and wintering grounds. 
                                While others stay in the same area year-round, especially in places where food and open water remain available.
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="font-lexend font-bold text-3xl text-stone-800">
                                What Ducks Eat
                            </div>
                            <div className="font-lexend text-center">
                                Ducks are opportunistic feeders, this means that they adapt their diets to consume whatever food is readily available, rather than relying on a single, specific food source. Common foods include:
                                <ol className="m-2">
                                    <li>&#8226; Aquatic plants and algae</li>
                                    <li>&#8226; Seeds and grains</li>
                                    <li>&#8226; Insects and small invertebrates</li>
                                    <li>&#8226; Snails, crustaceans, and tiny fish</li>
                                    <li>&#8226; Grass and leafy vegetation</li>
                                </ol>
                                Dabbling ducks (like mallards) feed at the water's surface, often tipping forward with their tails in the air. 
                                Diving ducks plunge beneath the water to forage deeper down.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center text-center mb-8 ml-8 mr-8 gap-3">
                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="font-lexend font-bold text-3xl text-stone-800">
                                What Ducks Do
                            </div>
                            <div className="font-lexend text-center">
                                Ducks are a social bunch, they lead surprisingly busy and social lives. Some of their everyday activities include:
                                <ol className="m-2">
                                    <li>&#8226; <b>Swimming and foraging</b> for food throughout the day</li>
                                    <li>&#8226; <b>Preening</b> to keep their feathers waterproof and healthy</li>
                                    <li>&#8226; <b>Waddling on land</b> in search of grass or nesting spot</li>
                                    <li>&#8226; <b>Quacking, whistling, or grunting</b> to communicate</li>
                                    <li>&#8226; <b>Raising ducklings</b>, who imprint on their mother and follow her everywhere</li>
                                </ol>
                                Many species are highly social and gather in flocks, especially outside the breeding season.
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="font-lexend font-bold text-3xl text-stone-800">
                                Why Ducks Matter
                            </div>
                            <div className="font-lexend text-center">
                                Ducks play an important role in ecosystems by:
                                <ol className="m-2">
                                    <li>&#8226; Spreading seeds</li>
                                    <li>&#8226; Controlling insect populations</li>
                                    <li>&#8226; Supporting wetland health</li>
                                    <li>&#8226; Providing food for predators</li>
                                    <li>&#8226; Helping maintain biodiversity</li>
                                </ol>
                                They're also culturally iconic, often appearing in folklore, art, and even internet memes, bringing joy to people of all ages.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}