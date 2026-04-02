import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import { Link } from "react-router-dom";
import Navbar from "./navbar";

const photos = [
    { src: "src/assets/17.jpg"},
    { src: "src/assets/37.jpg"},
    { src: "src/assets/44.jpg"},
    { src: "src/assets/269.jpg"},
    { src: "src/assets/303.jpg"},
    { src: "src/assets/326.JPG"},
    { src: "src/assets/332.JPG"},
    { src: "src/assets/336.jpg"},
    { src: "src/assets/424.jpg"},
    { src: "src/assets/425.jpg"},
    { src: "src/assets/437.jpg"},
    { src: "src/assets/527.jpg"},
    { src: "src/assets/529.jpg"},
    { src: "src/assets/548.jpg"},
    { src: "src/assets/120.jpg"},
    { src: "src/assets/200.jpg"},
    { src: "src/assets/410.jpg"},
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