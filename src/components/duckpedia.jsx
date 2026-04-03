import { useState } from "react";
import Navbar from "./navbar";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import img303 from "../assets/303.jpg";
import img529 from "../assets/529.jpg";
import img410 from "../assets/410.jpg";

import mallardImg from "../assets/1200.jpg";
import mandarinImg from "../assets/wildlifetrusts_42318949324.jpg";
import muscovyImg from "../assets/muscovyDuck.jpg";
import pintailImg from "../assets/75227621-1200px.jpg";
import blackDuckImg from "../assets/301259931-480px.jpg";

export default function Duckpedia() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <Navbar />

            <div className="bg-linear-to-b from-amber-200 to-stone-200">
                <div className="text-stone-800 flex flex-col justify-center items-center gap-3">

                    <div className="font-climate text-3xl text-stone-800 mt-15 mb-8">
                        Learn more about ducks!
                    </div>

                    <div className="flex flex-row items-center justify-center gap-3">
                        <img src={img303} className="w-1/4 h-1/4" />
                        <img src={img529} className="w-1/4 h-1/4" />
                        <img src={img410} className="w-1/4 h-1/4" />
                    </div>

                    <div className="font-lexend m-8 ml-25 mr-25 text-center">
                        Ducks are one of the most beloved waterbirds around the world. They are known for their cheerful waddles, expressive quacks and remarkable adaptability. 
                        They belong to the bird family Anatidae, which also includes geese and swans. Ducks can be found on every continent except Antarctica, thriving in environments ranging from quiet village ponds to vast wetlands and bustling city parks!
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
                                Others stay in the same area year-round, especially where food and open water remain available.
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-xl p-6">
                            <div className="font-lexend font-bold text-3xl text-stone-800">
                                What Ducks Eat
                            </div>
                            <div className="font-lexend text-center">
                                Ducks are opportunistic feeders, adapting their diets to whatever food is available. Common foods include:
                                <ol className="m-2">
                                    <li>&#8226; Aquatic plants and algae</li>
                                    <li>&#8226; Seeds and grains</li>
                                    <li>&#8226; Insects and small invertebrates</li>
                                    <li>&#8226; Snails, crustaceans, and tiny fish</li>
                                    <li>&#8226; Grass and leafy vegetation</li>
                                </ol>
                                Dabbling ducks feed at the surface, often tipping forward with their tails in the air. 
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
                                Ducks lead surprisingly busy and social lives. Some of their everyday activities include:
                                <ol className="m-2">
                                    <li>&#8226; <b>Swimming and foraging</b> for food</li>
                                    <li>&#8226; <b>Preening</b> to keep feathers waterproof</li>
                                    <li>&#8226; <b>Waddling on land</b> in search of grass or nesting spots</li>
                                    <li>&#8226; <b>Quacking, whistling, or grunting</b> to communicate</li>
                                    <li>&#8226; <b>Raising ducklings</b>, who imprint on their mother</li>
                                </ol>
                                Many species gather in flocks, especially outside the breeding season.
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
                                They're also culturally iconic and bring joy to people of all ages.
                            </div>
                        </div>
                    </div>

                    <div className="font-lexend font-bold text-3xl text-stone-800">
                        Common Duck Species
                    </div>

                    <div className="mb-8 ml-8 mr-8">

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="font-lexend font-semibold">Mallard (Anas platyrhynchos)</span>
                            </AccordionSummary>
                            <AccordionDetails className="font-lexend flex flex-col">
                                <img src={mallardImg} className="w-1/4 m-2" />
                                <span>
                                    The mallard is the most widespread and familiar duck species in the world.
                                </span>
                                <span>
                                    They are known for their loud quacks and highly social behaviour.
                                </span>
                                <span className="mt-2">
                                    <b>Fun fact:</b> Mallards hybridise easily with other duck species.
                                </span>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="font-lexend font-semibold">Mandarin Duck (Aix galericulata)</span>
                            </AccordionSummary>
                            <AccordionDetails className="font-lexend flex flex-col">
                                <img src={mandarinImg} className="w-1/4 m-2" />
                                <span>
                                    One of the most strikingly beautiful ducks, often called the “most colourful duck in the world.”
                                </span>
                                <span>
                                    They are shy in the wild but calm in parks.
                                </span>
                                <span className="mt-2">
                                    <b>Fun fact:</b> Mandarin ducks symbolise love and fidelity in East Asian cultures.
                                </span>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="font-lexend font-semibold">Muscovy Duck (Cairina moschata)</span>
                            </AccordionSummary>
                            <AccordionDetails className="font-lexend flex flex-col">
                                <img src={muscovyImg} className="w-1/4 m-2" />
                                <span>
                                    A large, distinctive duck often seen on farms or in warm climates.
                                </span>
                                <span>
                                    They are calm, gentle, and surprisingly strong flyers.
                                </span>
                                <span className="mt-2">
                                    <b>Fun fact:</b> Muscovies are technically not “true ducks.”
                                </span>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="font-lexend font-semibold">Northern Pintail (Anas acuta)</span>
                            </AccordionSummary>
                            <AccordionDetails className="font-lexend flex flex-col">
                                <img src={pintailImg} className="w-1/4 m-2" />
                                <span>
                                    A sleek, elegant duck known for its long neck and pointed tail.
                                </span>
                                <span>
                                    They are strong, fast flyers and highly migratory.
                                </span>
                                <span className="mt-2">
                                    <b>Fun fact:</b> Pintails are among the earliest ducks to migrate each year.
                                </span>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="font-lexend font-semibold">American Black Duck (Anas rubripes)</span>
                            </AccordionSummary>
                            <AccordionDetails className="font-lexend flex flex-col">
                                <img src={blackDuckImg} className="w-1/4 m-2" />
                                <span>
                                    A close relative of the mallard, but darker and more secretive.
                                </span>
                                <span>
                                    They are shy and wary compared to mallards.
                                </span>
                                <span className="mt-2">
                                    <b>Fun fact:</b> Their population declined due to habitat loss and hybridisation.
                                </span>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </div>
    );
}
