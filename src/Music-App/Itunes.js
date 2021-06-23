import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

  const Itunes =(dataa)=>   {
  
        return (
          
            <ReactAudioPlayer
            src={dataa.results[0].previewUrl}
            autoPlay
            controls
            />
        );
     
}
export default Itunes;