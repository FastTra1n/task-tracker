import './components/TechnologyCard.css'
import TechnologyCard from './components/TechnologyCard'

function App() {
  return (
    <>
      <TechnologyCard
        title='React Components'
        description='Изучение базовых компонентов'
        status='planned'
      />
      
      <TechnologyCard
      title='JSX Syntax'
      description='Освоение синтаксиса JSX'
      status='pending'
    />

    <TechnologyCard
      title='State Management'
      description='Работа с состоянием компонентов'
      status='completed'
    />
    </>
  );
}

export default App
