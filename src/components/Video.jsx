import React from 'react';


const Video = ({title, description, url }) =>{
    return (
        <div className="Video">
            <h2>{ title}</h2>
            <p>{ description}</p>
            <video src={url} controls  width="640" height="360" />
        </div>
    );
};

export default Video;