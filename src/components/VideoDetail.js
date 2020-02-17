import React from 'react';

const VideoDetail = ({ status, video }) => {
  if (status === 'awaiting') {
    return <div>Loading...</div>;
  }

  if (status === 'loaded') {
    return (
      <div>
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="video player" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }

  if (status === 'none') {
    return null;
  }
};

export default VideoDetail;
