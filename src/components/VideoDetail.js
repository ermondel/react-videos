import React from 'react';

const VideoDetail = (props) => (
  <div>
    <div className='ui embed'>
      <iframe
        src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
        title='video player'
      />
    </div>
    <div className='ui segment'>
      <h4 className='ui header'>{props.video.snippet.title}</h4>
      <p>{props.video.snippet.description}</p>
    </div>
  </div>
);

export default VideoDetail;
