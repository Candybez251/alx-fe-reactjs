import axios from 'axios';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  // Construct the search query
  let query = `${username}`;
  
  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  // GitHub Search API URL
  const API_URL = `https://api.github.com/search/users?q=${query}`;

  try {
    // Make the GET request using the constructed API URL
    const response = await axios.get(API_URL);
    return response.data.items;  // Return the list of users
  } catch (error) {
    throw new Error('Unable to fetch user data');
  }
};