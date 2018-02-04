import React from "react";
import "./specific-gif.styles.css";
import GifData from "./../gif-data/gif-data.component";

const SpecificGif = ({selectedGif, returnToSearch}) => {
    console.log("gif: ", selectedGif);
    return <div className="specific-gif">
        {/* <span className="specific-gif__exit">Back to search</span> */}
        <div className="specific-gif__image">
            { (selectedGif)
                ? <img src={selectedGif.images.original.url} />
                : ""
            }
        </div>
        <div className="specific-gif__data">
            { (selectedGif)
                ? <GifData gif={selectedGif} />
                : ""
            }
        </div>
    </div>
}

export default SpecificGif;
