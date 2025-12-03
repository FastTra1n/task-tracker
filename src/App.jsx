import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'
import './components/QuickActions.css'
import './components/FilterTabs.css'
import "./components/TechnologyNotes.css"
import "./components/Navigation.css"
import "./pages/Home.css"
import "./pages/TechnologyList.css"
import "./pages/Login.css"

import Navigation from './components/Navigation'
import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import AddTechnology from './pages/AddTechnology';
import Statistics from './pages/Statistics';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedIn);
    setUsername(user);
  }, []);

  const handleLogin = (user) => { 
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => { 
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('username'); 
    setIsLoggedIn(false); 
    setUsername(''); 
  };

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />}/>
        <Route path="/technologies" element={<TechnologyList />}/>
        <Route path="/add-technology" element={<AddTechnology />}/>
        <Route path="/statistics" element={<Statistics />}/>
      </Routes>
    </>
  );
}

export default App
