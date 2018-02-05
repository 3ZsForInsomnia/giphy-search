import React from 'react';
import './gif-display.styles.css';

const GifDisplay = ({gif}) => {
    return <div className="gif-display">
        <div className="gif-display__gif">
            { (gif)
                ? <img
                    className="gif-display__image"
                    src={gif.images.fixed_width_small.url}/>
                : "" }
        </div>
    </div>
}

export default GifDisplay;
