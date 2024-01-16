import React from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App h-screen bg-gray-300">
        <SearchContainer />
      </div>
    </UserProvider>
  );
}

export default App;
