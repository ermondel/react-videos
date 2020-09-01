import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => (
  <div className='ui relaxed divided list'>
    {props.videos.map((video) => (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
        isActive={
          props.selectedVideo
            ? props.selectedVideo.id.videoId === video.id.videoId
            : false
        }
      />
    ))}
  </div>
);

export default VideoList;
