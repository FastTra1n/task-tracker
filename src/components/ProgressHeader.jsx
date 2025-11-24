function ProgressHeader({ techs }) {
  const totalQuanity = techs.length
  const completedQuanity = techs.filter(tech => tech.status == 'completed').length
  const completedPercentage = Math.round(completedQuanity / totalQuanity * 100)
  
  return (
    <div className="progress-header">
      <h1>Дорожная карта</h1>
      
      <div className="progress-header__stats">
        <div className="progress-header__stat">
          <span className="stat__label">Всего технологий: </span>
          <span className="stat__number">{totalQuanity}</span>
        </div>

        <div className="progress-header__stat">
          <span className="stat__label">Изученных технологий: </span>
          <span className="stat__number">{completedQuanity}</span>
        </div>

        <div className="progress-header__stat">
          <span className="stat__label">Процент изучения: </span>
          <span className="stat__number">{completedPercentage} %</span>
        </div>

        <div className="progress-header__progress">
          <div className="progress__fill" style={{ width: `${completedPercentage}%`}}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressHeader;
