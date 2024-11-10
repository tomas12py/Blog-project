import axios from 'axios';
import { API } from './constants/api';

export const axiosInstance = axios.create({
  baseURL: API.BASE_URL,
  timeout: API.TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});