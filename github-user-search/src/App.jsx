import './index.css';
import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';  // Import the service

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    try {
      const userData = await fetchUserData(username);  // Call the service to fetch user data
      setUser(userData);
    } catch (err) {
      setError('Looks like we can’t find the user.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />  {/* Pass handleSearch to the search component */}
      <div className="container mx-auto mt-10">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && (
          <div className="bg-white shadow rounded p-5">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;