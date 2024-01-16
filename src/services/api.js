// api.js
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const login = async (credentials) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data;
  } catch (error) {
    // Handle API error (you can customize this based on your needs)
    throw new Error('An error occurred during the API call');
  }
};

export default {
  login,
};
