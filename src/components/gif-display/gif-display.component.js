import React from "react";

const GifDisplay = ({gif}) => {
    return <div className="gif-display">
        <div className="gif-display__gif">
        { (gif)
            ? <img src={gif.images.fixed_width_small.url}/>
            : ""
        }
        </div>
    </div>
}

export default GifDisplay;
