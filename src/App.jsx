import './App.css'
import './components/TechnologyCard.css'
import './components/ProgressHeader.css'

import TechnologyCard from './components/TechnologyCard'
import ProgressHeader from './components/ProgressHeader';

function App() {
  const technologies = [ 
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'completed' }, 
    { id: 2, title: 'JSX Syntax', description: 'Освоение синтаксиса JSX', status: 'in-progress' }, 
    { id: 3, title: 'State Management', description: 'Работа с состоянием компонентов', status: 'not-started' }
  ];

  return (
    <>
      <ProgressHeader techs={technologies} />

      <h2>Список задач</h2>
      <ul>
        {technologies.map(tech => (
          <li
          key={tech.id}
          >
            <TechnologyCard
              title={tech.title}
              description={tech.description}
              status={tech.status}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
