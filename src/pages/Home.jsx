import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1 className="hero-title">🚀 Дорожная карта Фронтенда</h1>
        <p className="hero-subtitle">
          Твой личный трекер технологий. Отслеживай прогресс, ставь цели, покоряй фронтенд!
        </p>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-icon">📊</div>
          <h3>Визуальный прогресс</h3>
          <p>Отслеживай изучение каждой технологии</p>
        </div>
        <div className="feature">
          <div className="feature-icon">✍️</div>
          <h3>Заметки</h3>
          <p>Сохраняй ссылки, коды и мысли</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💾</div>
          <h3>Автосохранение</h3>
          <p>Данные сохраняются автоматически</p>
        </div>
      </div>
    </div>
  );
}

export default Home;