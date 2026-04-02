import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Duckpedia from "./components/duckpedia";
import Soundboard from "./components/soundboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/duckpedia" element={<Duckpedia />} />
                <Route path="/soundboard" element={<Soundboard />} />                
            </Routes>
        </BrowserRouter>
    );
}