import { useState } from 'react'

import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'

import TechnologyCard from './components/TechnologyCard'
import ProgressHeader from './components/ProgressHeader';

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

  const handleStatusChange = (id, newStatus) => {
    setTechnologies(prev => prev.map(tech =>
      tech.id === id ? {...tech, status: newStatus} : tech
    ));
  };

  return (
    <>
      <ProgressHeader techs={technologies} />

      <h2>Список задач</h2>
      <div className="task-wrapper">
        {technologies.map(tech => (
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
