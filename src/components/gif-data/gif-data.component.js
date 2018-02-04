import React from 'react';
import './gif-data.styles.css';

const GifData = ({gif}) => {
    return <div className="gif-data">
        <p className="">GIF title: {gif.title}</p>
        <p className="">Source: {gif.source}</p>
        <p className="">ID: {gif.id}</p>
        <p className="">Imported on: {gif.import_datetime}</p>
        <p className="">Embed URL: {gif.embed_url}</p>
        <p className="">Bitly GIF URL: {gif.bitly_gif_url}</p>
    </div>
}

export default GifData;
