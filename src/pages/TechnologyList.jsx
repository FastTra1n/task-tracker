import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import TechnologyCard from "../components/TechnologyCard";

function TechnologyList() {
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

  useEffect(() => {
    localStorage.setItem('techTrackerData', JSON.stringify(technologies));
    console.log('Данные сохранены в localStorage');
  }, [technologies]);

  const handleStatusChange = (id, newStatus) => {
    setTechnologies(prev => prev.map(tech =>
      tech.id === id ? { ...tech, status: newStatus } : tech
    ));
  };

  const updateTechnologyNotes = (techId, newNotes) => { 
    setTechnologies(prev =>
      prev.map(tech =>
        tech.id === techId ? { ...tech, notes: newNotes } : tech 
      ) 
    ); 
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Все технологии</h1>
          <Link to="/add-technology" className="btn btn-primary">
            + Добавить технологию
          </Link>
      </div>
      
      <div className="technologies-grid">
        {technologies.map(tech => (
          <TechnologyCard
            id={tech.id}
            title={tech.title}
            description={tech.description}
            status={tech.status}
            notes={tech.notes}
            onStatusChange={handleStatusChange}
            onNotesChange={updateTechnologyNotes}
          />
        //   <div key={tech.id} className="technology-item">
        //     <h3>{tech.title}</h3>
        //     <p>{tech.description}</p>
        //     <div className="technology-meta">
        //       <span className={`status status-${tech.status}`}>
        //         {tech.status}
        //       </span>
        //       <Link to={`/technology/${tech.id}`} className="btn-link">
        //         Подробнее →
        //       </Link>
        //     </div>
        //   </div>
        ))}
      </div>
      
      {technologies.length === 0 && (
        <div className="empty-state">
          <p>Технологий пока нет.</p>
            <Link to="/add-technology" className="btn btn-primary">
              Добавить первую технологию 
            </Link>
        </div>
      )}
    </div>
  );
}

export default TechnologyList;