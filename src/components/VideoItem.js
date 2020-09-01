import React from 'react';

const VideoItem = (props) => (
  <div onClick={() => props.onVideoSelect(props.video)} className='video-item item'>
    <div className='ui image'>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
    </div>
    <div className='content'>
      <div className='header'>{props.video.snippet.title}</div>
    </div>
  </div>
);

export default VideoItem;
