import React from 'react';

const VideoDetail = ({ status, video }) => {
  if (status === 'awaiting') {
    return <div>Loading...</div>;
  } else if (status === 'loaded') {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="video player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default VideoDetail;
