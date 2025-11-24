function TechnologyCard({ title, description, status }) {
  let statusIcon, statusText;

  if (status == 'completed') {
    statusIcon = '✅';
    statusText = 'Выполнено';
  }
  else if (status == 'pending') {
    statusIcon = '🔥';
    statusText = 'Выполняется';
  }
  else {
    statusIcon = '⏳'
    statusText = 'Планируется'
  }

  return (
    <div className="tech-card">
      <div className="tech-card__header">
        <div className="tech-card__status">
          <span className="tech-card__icon">{statusIcon}</span>
          <span className="tech-card__status">{statusText}</span>
        </div>
      </div>

      <div className="tech-card__content">
        <h3 className="tech-card__title">{title}</h3>
        <p className="tech-card__description">{description}</p>
      </div>
    </div>
  );
}

export default TechnologyCard;