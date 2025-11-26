function ProgressHeader({ techs }) {
  const totalQuanity = techs.length
  const completedQuanity = techs.filter(tech => tech.status == 'completed').length
  const inProgressQuanity = techs.filter(tech => tech.status == 'in-progress').length
  const notStartedQuanity = techs.filter(tech => tech.status == 'not-started').length
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

          <span className="stat__label">Изучающиеся технологий: </span>
          <span className="stat__number">{inProgressQuanity}</span>

          <span className="stat__label">Неизученные технологий: </span>
          <span className="stat__number">{notStartedQuanity}</span>
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
