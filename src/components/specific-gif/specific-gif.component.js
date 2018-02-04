import React from "react";
import "./specific-gif.styles.css";
import GifData from "./../gif-data/gif-data.component";

const SpecificGif = ({selectedGif, returnToSearch}) => {
    return <div className="specific-gif">
        <div className="specific-gif__image">
            { (selectedGif && selectedGif.images)
                ? <img src={selectedGif.images.original.url} />
                : "" }
        </div>
        <div className="specific-gif__data">
            <span
                className="specific-gif__exit"
                onClick={() => returnToSearch(selectedGif)}
            >
                Back to search
            </span>
            { (selectedGif)
                ? <GifData gif={selectedGif} />
                : "" }
        </div>
    </div>
}

export default SpecificGif;
