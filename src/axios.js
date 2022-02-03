import axios from 'axios'
import { API_URL, API_KEY } from './constants';

const instance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      common: {
        'x-api-key': `${API_KEY}`
      }
    }
});

export default instance;
