import React, { useState, useEffect } from 'react';
import api from '../api/config';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loading from './Loading';
import Dimmer from './Dimmer';
import ErrorMessage from './ErrorMessage';
import '../style/App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [status, setStatus] = useState('wait');

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await api.get('/');

        setStatus(response.status === 200 ? 'ready' : 'fault');
      } catch {
        setStatus('fault');
      }
    };

    checkAPI();
  }, []);

  const getVideos = async (q) => {
    try {
      const response = await api.get('/request/youtube', {
        params: { q },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='ui container app'>
      {status === 'wait' && <Dimmer />}
      {['fault', 'error'].indexOf(status) >= 0 && <ErrorMessage />}
      {['ready', 'loading', 'done'].indexOf(status) >= 0 && (
        <div>
          <SearchBar
            onFormSubmit={(term) => {
              setStatus('loading');
              getVideos(term);
            }}
          />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                {status === 'loading' && <Loading />}
                {status === 'done' && <VideoDetail video={selectedVideo} />}
              </div>
              <div className='five wide column'>
                <VideoList
                  onVideoSelect={setSelectedVideo}
                  videos={videos}
                  selectedVideo={selectedVideo}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
