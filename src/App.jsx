import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'
import './components/QuickActions.css'
import './components/FilterTabs.css'
import "./components/TechnologyNotes.css"
import "./components/Navigation.css"

import TechnologyCard from './components/TechnologyCard'
import ProgressHeader from './components/ProgressHeader';
import QuickActions from './components/QuickActions'
import FilterTabs from './components/FilterTabs'
import Navigation from './components/Navigation'
import Home from './pages/Home';

function App() {
  const [technologies, setTechnologies] = useState(() => {
    const saved = localStorage.getItem('techTrackerData'); 
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed;
    }
    return [ 
      {  
        id: 1,  
        title: 'React Components',  
        description: 'Изучение базовых компонентов',  
        status: 'completed',
        notes: ''
      }, 
      {  
        id: 2,  
        title: 'JSX Syntax',  
        description: 'Освоение синтаксиса JSX',  
        status: 'in-progress',
        notes: ''
      },
      {  
        id: 3,  
        title: 'State Management',  
        description: 'Работа с состоянием компонентов',  
        status: 'not-started',
        notes: ''
      },
      {
        id: 4,
        title: 'Hooks',
        description: 'useState, useEffect, useContext и др.',
        status: 'not-started',
        notes: ''
      },
      {
        id: 5,
        title: 'React Router',
        description: 'Навигация в SPA',
        status: 'not-started',
        notes: ''
      },
      {
        id: 6,
        title: 'Zustand / Redux',
        description: 'Глобальное состояние',
        status: 'completed',
        notes: ''
      }
    ]
  });

  const [filter, setFilter] = useState('all');
  const [searсhQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('techTrackerData', JSON.stringify(technologies));
    console.log('Данные сохранены в localStorage');
  }, [technologies]);

  const handleStatusChange = (id, newStatus) => {
    setTechnologies(prev => prev.map(tech =>
      tech.id === id ? { ...tech, status: newStatus } : tech
    ));
  };

  const markAllCompleted = () => {
    setTechnologies(prev => prev.map(tech => ({ ...tech, status: 'completed' })));
  };
  
  const markAllNotStarted = () => {
    setTechnologies(prev => prev.map(tech => ({ ...tech, status: 'not-started' })));
  };

  const markRandomNext = () => {
    const uncompletedTechs = technologies.filter(t => t.status !== 'completed' && t.status !== 'in-progress');
    if (uncompletedTechs.length === 0) return;

    const randomTech = uncompletedTechs[Math.floor(Math.random() * uncompletedTechs.length)];
    handleStatusChange(randomTech.id, 'in-progress');
  }

  const filteredTechs = technologies.filter(tech => {
    const hasSearchQuery = tech.title.toLowerCase().includes(searсhQuery.toLowerCase())
      || tech.description.toLowerCase().includes(searсhQuery.toLowerCase());
    const hasStatus = tech.status === filter || filter === 'all';

    return hasStatus && hasSearchQuery;
  })

  const updateTechnologyNotes = (techId, newNotes) => { 
    setTechnologies(prev =>
      prev.map(tech =>
        tech.id === techId ? { ...tech, notes: newNotes } : tech 
      ) 
    ); 
  }

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      {/* <ProgressHeader techs={technologies} />
      <QuickActions
        onMarkAllCompleted={markAllCompleted}
        onMarkAllNotStarted={markAllNotStarted}
        onMarkRandomNext={markRandomNext}
        technologies={technologies}
      />
      <FilterTabs
        currentFilter={filter}
        onFilterChange={setFilter}
        onQueryChange={setSearchQuery}
      />

      <h2>Список задач</h2>
      <div className="task-wrapper">
        {filteredTechs.map(tech => (
          <TechnologyCard
              key={tech.id}
              id={tech.id}
              title={tech.title}
              description={tech.description}
              status={tech.status}
              notes={tech.notes}
              onStatusChange={handleStatusChange}
              onNotesChange={updateTechnologyNotes}
          />
        ))}
      </div> */}
    </>
  );
}

export default App
