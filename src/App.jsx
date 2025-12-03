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
import "./pages/Settings.css"
import "./pages/TechnologyDetail.css"

import Navigation from './components/Navigation'
import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import AddTechnology from './pages/AddTechnology';
import Statistics from './pages/Statistics';
import Login from './pages/Login';
import Settings from './pages/Settings';

import ProtectedRoute from './components/ProtectedRoute';
import TechnologyDetail from './pages/TechnologyDetail';

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
        <Route
          path="/technologies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TechnologyList />
            </ProtectedRoute>
          }/>
        <Route
          path="/add-technology"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AddTechnology />
            </ProtectedRoute>
          }/>
        <Route
          path="/statistics"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Statistics />
            </ProtectedRoute>
          }/>
        <Route
          path="/settings"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Settings />
            </ProtectedRoute>
          }/>
        <Route
          path="/technology/:techId"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <TechnologyDetail />
            </ProtectedRoute>
          }/>
      </Routes>
    </>
  );
}

export default App
