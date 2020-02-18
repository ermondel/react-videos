import axios from 'axios';

export default axios.create({
  baseURL: 'https://erm-node-api-server.herokuapp.com',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5
  }
});
