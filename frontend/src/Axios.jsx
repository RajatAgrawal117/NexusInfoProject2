// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:4000/api/auth/', // Replace with your backend URL
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

export default instance;
