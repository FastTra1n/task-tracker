import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'
import './components/QuickActions.css'
import './components/FilterTabs.css'
import "./components/TechnologyNotes.css"
import "./components/Navigation.css"
import "./pages/Home.css"
import "./pages/TechnologyList.css"

import Navigation from './components/Navigation'
import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import AddTechnology from './pages/AddTechnology';
import Statistics from './pages/Statistics';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/technologies" element={<TechnologyList />}/>
        <Route path="/add-technology" element={<AddTechnology />}/>
        <Route path="/statistics" element={<Statistics />}/>
      </Routes>
    </>
  );
}

export default App
