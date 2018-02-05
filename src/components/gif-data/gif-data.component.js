import React from 'react';
import './gif-data.styles.css';

const GifData = ({gif}) => {
    return <div className="gif-data">
        <p className="gif-data__item">GIF title: {gif.title}</p>
        <p className="gif-data__item">Source: {gif.source}</p>
        <p className="gif-data__item">ID: {gif.id}</p>
        <p className="gif-data__item">Imported on: {gif.import_datetime}</p>
        <p className="gif-data__item">Embed URL: 
            <a href={gif.embed_url} target="_blank" rel="noopener noreferrer">
                {gif.embed_url}
            </a>
        </p>
        <p className="gif-data__item">Bitly GIF URL: 
            <a href={gif.bitly_gif_url} target="_blank" rel="noopener noreferrer">
                {gif.bitly_gif_url}
            </a>
        </p>
    </div>
}

export default GifData;
