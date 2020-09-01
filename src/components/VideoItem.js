import React from 'react';

const VideoItem = (props) => (
  <div
    onClick={!props.isActive ? () => props.onVideoSelect(props.video) : null}
    className={`video-item item ${props.isActive ? 'active-video-item' : ''}`}
  >
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
