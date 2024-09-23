import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);  // Store multiple users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);  // Clear previous users
    try {
      const userData = await fetchUserData(username, location, minRepos);  // Pass additional params
      setUsers(userData);  // Set the list of users
    } catch (err) {
      setError("Looks like we can't find the user");
    }
    setLoading(false);
  };

  return (
    <div className="search-container">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10 space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border border-gray-400 p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="border border-gray-400 p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="border border-gray-400 p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      <div className="result-container mt-5">
        {/* Loading State */}
        {loading && <p>Loading...</p>}

        {/* Error State */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display multiple users */}
        {users.length > 0 && (
          <div className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {users.map((user) => (
              <div key={user.id} className="user-card bg-white shadow rounded p-5 text-center">
                {/* User Avatar */}
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                {/* User Login */}
                <h2 className="text-xl font-bold mt-3">{user.login}</h2>
                {/* Link to GitHub Profile */}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}

        {/* No users found */}
        {users.length === 0 && !loading && !error && (
          <p className="text-gray-500">No users found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default Search;