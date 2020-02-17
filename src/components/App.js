import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, remoteStatus: 'awaiting', videoLoadStatus: 'none' };

  componentDidMount() {
    youtube
      .get('/')
      .then((response) => {
        this.setState({
          remoteStatus: response.status === 200 ? 'ready' : 'not available'
        });
      })
      .catch((error) => {
        this.setState({
          remoteStatus: 'not available'
        });
      });
  }

  onTermSubmit = (term) => {
    this.setState({
      videoLoadStatus: 'awaiting'
    });

    youtube
      .get('/youtube', {
        params: {
          q: term
        }
      })
      .then((response) => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          videoLoadStatus: 'loaded'
        });
      })
      .catch((error) => {
        this.setState({
          remoteStatus: 'not available',
          videoLoadStatus: 'none'
        });
      });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  containerDimmer = () => {
    return (
      <div className="ui container">
        <div className="ui active transition visible dimmer">
          <div className="content">
            <div className="ui indeterminate text loader">Connection to a remote server. Please wait a few seconds.</div>
          </div>
        </div>
        <img src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" className="ui image" alt="dimmer" />
      </div>
    );
  };

  containerNotAvailable = () => {
    return (
      <div className="ui segment">
        <div className="ui message">
          <div className="header">Server is not available</div>
          <p>Sorry, the service is currently unavailable. Please come back later.</p>
        </div>
      </div>
    );
  };

  containerMain = () => {
    const { videos, selectedVideo, videoLoadStatus } = this.state;

    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} status={videoLoadStatus} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { remoteStatus } = this.state;

    return (
      <div className="ui container">
        {remoteStatus === 'awaiting' && this.containerDimmer()}
        {remoteStatus === 'ready' && this.containerMain()}
        {remoteStatus === 'not available' && this.containerNotAvailable()}
      </div>
    );
  }
}

export default App;
