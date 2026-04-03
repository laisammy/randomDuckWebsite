import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import { Link } from "react-router-dom";
import Navbar from "./navbar";

import img17 from "../assets/17.jpg";
import img37 from "../assets/37.jpg";
import img44 from "../assets/44.jpg";
import img269 from "../assets/269.jpg";
import img303 from "../assets/303.jpg";
import img326 from "../assets/326.JPG";
import img332 from "../assets/332.JPG";
import img336 from "../assets/336.jpg";
import img424 from "../assets/424.jpg";
import img425 from "../assets/425.jpg";
import img437 from "../assets/437.jpg";
import img527 from "../assets/527.jpg";
import img529 from "../assets/529.jpg";
import img548 from "../assets/548.jpg";
import img120 from "../assets/120.jpg";
import img200 from "../assets/200.jpg";
import img410 from "../assets/410.jpg";

const photos = [
    { src: img17 },
    { src: img37 },
    { src: img44 },
    { src: img269 },
    { src: img303 },
    { src: img326 },
    { src: img332 },
    { src: img336 },
    { src: img424 },
    { src: img425 },
    { src: img437 },
    { src: img527 },
    { src: img529 },
    { src: img548 },
    { src: img120 },
    { src: img200 },
    { src: img410 },
];


export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return(
        <div>
            <Navbar/>
            <div className="bg-linear-to-b from-amber-200 to-stone-200">
                <ColumnsPhotoAlbum
                    photos={photos}
                    columns={(containerWidth) => {
                        if (containerWidth < 400) return 1;
                        if (containerWidth < 800) return 2;
                        return 3;
                    }}
                    onClick={({ index }) => setIndex(index)}
                />
            </div>
        </div>
    )
}