import React from 'react';
import Dimmer from './Dimmer';
import NotAvailable from './NotAvailable';
import SearchBar from './SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import Loading from './Loading';
import youtube from '../api/youtube';
import './App.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    remoteStatus: 'awaiting',
    videoLoadStatus: 'none'
  };

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

  onTermSubmit = (query) => {
    this.setState({
      videoLoadStatus: 'awaiting'
    });

    youtube
      .get('/youtube', {
        params: {
          q: query
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

  render() {
    const APP_WAIT = this.state.remoteStatus === 'awaiting';
    const APP_READY = this.state.remoteStatus === 'ready';
    const APP_NOT = this.state.remoteStatus === 'not available';
    const VID_WAIT = this.state.videoLoadStatus === 'awaiting';
    const VID_READY = this.state.videoLoadStatus === 'loaded';
    const VID_NONE = this.state.videoLoadStatus === 'none';

    return (
      <div className="ui container app">
        {APP_WAIT && <Dimmer />}
        {APP_READY && (
          <div>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  {VID_WAIT && <Loading />}
                  {VID_READY && (
                    <VideoDetail video={this.state.selectedVideo} />
                  )}
                  {VID_NONE && null}
                </div>
                <div className="five wide column">
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {APP_NOT && <NotAvailable />}
      </div>
    );
  }
}

export default App;
