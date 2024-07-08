import React, { useState } from 'react';
import Video from './Video' ;
import myVideo from '../assets/sample_video.mp4';
import VideoPlayer from './VideoPlayer';
import myVideo1 from '../assets/duck.mp4';
import myVideo2 from '../assets/manic.mp4';

const VideoList = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const videos = [
        {
            title: 'Video 1',
            description: 'This is the first video description.',
            url: myVideo,
        },
        {
            title: 'Video 2',
            description: 'This is the second video description.',
            url: myVideo1,
        },
        {
            title: 'Video 3',
            description: 'This is the Third video description.',
            url: myVideo2,
        },
    ];

    const hanleNext = () => {
        if (currentVideoIndex < videos.length -1) {
            setCurrentVideoIndex (currentVideoIndex + 1);
        }
    };

    const handlePrevious = () =>{
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    return(
        <div className="video-list">
            <Video
            title={videos[currentVideoIndex].title}
            description={videos[currentVideoIndex].description}
            // url= {myVideo}
            url={videos[currentVideoIndex].url}
            />

            {/* <VideoPlayer src={myVideo} /> */}

            

            <button onClick={handlePrevious} disabled={currentVideoIndex === 0}>
             Previous
             </button>   
             <button onClick={hanleNext} disabled={currentVideoIndex === videos.length - 1}>
                Next
             </button>
        </div>
    );
};

export default VideoList;