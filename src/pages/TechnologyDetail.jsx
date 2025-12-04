import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function TechnologyDetail() {
  const { techId } = useParams();
  const navigate = useNavigate();
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('techTrackerData');
    if (saved) {
        const technologies = JSON.parse(saved);
        const tech = technologies.find(t => t.id === parseInt(techId));
        setTechnology(tech);
    }
  }, [techId]);

  const updateStatus = (newStatus) => {
    const saved = localStorage.getItem('techTrackerData');
    if (saved) {
        const technologies = JSON.parse(saved);
        const updated = technologies.map(tech =>
          tech.id === parseInt(techId) ? { ...tech, status: newStatus } : tech
        );
        localStorage.setItem('techTrackerData', JSON.stringify(updated));
        setTechnology({ ...technology, status: newStatus });
    }
  };

  const updateDescription = (newDescription) => {
    const saved = localStorage.getItem('techTrackerData');
    if (saved) {
        const technologies = JSON.parse(saved);
        const updated = technologies.map(tech =>
          tech.id === parseInt(techId) ? { ...tech, description: newDescription } : tech
        );
        localStorage.setItem('techTrackerData', JSON.stringify(updated));
        setTechnology({ ...technology, description: newDescription });
    }
  };

  if (!technology) {
    return (
      <div className="page">
        <h1>Технология не найдена</h1>
        <p>Технология с ID {techId} не существует.</p>
        <Link to="/technologies" className="btn">
          ← Назад к списку
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <Link to="/technologies" className="back-link">
          ← Назад к списку   
        </Link>
        <h1>{technology.title}</h1>
      </div>

      <div className="technology-detail">
        <div className="detail-section">
          <h3>Описание</h3>
          <textarea
          type="text"
          value={technology.description}
          onChange={(e) => updateDescription(e.target.value)}
          placeholder="Кратко о чём эта технология и зачем её изучать..."
          spellCheck="true"
        />
        </div>

        <div className="detail-section">
          <h3>Статус изучения</h3>
          <div className="status-button">
            <button
              onClick={() => updateStatus('not-started')}
              className={technology.status === 'not-started' ? 'active' : ''}
            >
              Не начато
            </button>
            <button 
              onClick={() => updateStatus('completed')} 
              className={technology.status === 'completed' ? 'active' : ''} 
            > 
              Завершено 
            </button>
          </div>
        </div>

        {technology.notes && (
            <div className="detail-section">
                <h3>Мои заметки</h3>
                <p>{technology.notes}</p>
            </div>
        )}
      </div>
    </div>
  );
}

export default TechnologyDetail;