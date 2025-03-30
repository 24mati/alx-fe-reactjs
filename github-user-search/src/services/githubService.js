// src/services/githubService.js
import axios from 'axios';

// Create Axios instance with base configuration
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : '',
    Accept: 'application/vnd.github.v3+json'
  }
});

// Fetch single user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("User not found");
    }
    throw error;
  }
};

// Search users with query parameters
export const searchUsers = async (params) => {
  try {
    const query = buildSearchQuery(params);
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error('Failed to search users');
  }
};

// Helper function to build search query
const buildSearchQuery = ({ username, location, minRepos }) => {
  let queryParts = [];
  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>${minRepos}`);
  
  return encodeURIComponent(queryParts.join(' '));
};
// For single user lookup
const user = await fetchUserData('octocat');

// For advanced search
const users = await searchUsers({
  username: 'john',
  location: 'new york',
  minRepos: 10
});
