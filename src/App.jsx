import { useState } from 'react'

import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'
import './components/QuickActions.css'
import './components/FilterTabs.css'

import TechnologyCard from './components/TechnologyCard'
import ProgressHeader from './components/ProgressHeader';
import QuickActions from './components/QuickActions'
import FilterTabs from './components/FilterTabs'

function App() {
  const [technologies, setTechnologies] = useState([ 
    {  
      id: 1,  
      title: 'React Components',  
      description: 'Изучение базовых компонентов',  
      status: 'completed'  
    }, 
    {  
      id: 2,  
      title: 'JSX Syntax',  
      description: 'Освоение синтаксиса JSX',  
      status: 'in-progress'  
    },
    {  
      id: 3,  
      title: 'State Management',  
      description: 'Работа с состоянием компонентов',  
      status: 'not-started'  
    },
    {
      id: 4,
      title: 'Hooks',
      description: 'useState, useEffect, useContext и др.',
      status: 'not-started'
    },
    {
      id: 5,
      title: 'React Router',
      description: 'Навигация в SPA',
      status: 'not-started'
    },
    {
      id: 6,
      title: 'Zustand / Redux',
      description: 'Глобальное состояние',
      status: 'completed'
    }
  ]);

  const [filter, setFilter] = useState('all');

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
    if (filter === 'all') return true;
    return tech.status === filter;
  })

  return (
    <>
      <ProgressHeader techs={technologies} />
      <QuickActions
        onMarkAllCompleted={markAllCompleted}
        onMarkAllNotStarted={markAllNotStarted}
        onMarkRandomNext={markRandomNext}
      />
      <FilterTabs
        currentFilter={filter}
        onFilterChange={setFilter}
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
              onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </>
  );
}

export default App
