import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://198.168.0.4:3333',
});