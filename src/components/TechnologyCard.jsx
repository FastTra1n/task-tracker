import TechnologyNotes from "./TechnologyNotes";

function TechnologyCard({ id, title, description, status, notes, onStatusChange, onNotesChange }) {
  const nextStatus = status === 'not-started' ? 'in-progress' :
                     status === 'in-progress' ? 'completed' : 'not-started';
  let statusIcon, statusText;

  if (status == 'completed') {
    statusIcon = '✅';
    statusText = 'Выполнено';
  }
  else if (status == 'in-progress') {
    statusIcon = '🔥';
    statusText = 'Выполняется';
  }
  else {
    statusIcon = '⏳'
    statusText = 'Планируется'
  }

  const changeStatus = () => {
    onStatusChange(id, nextStatus)
  }

  return (
    <>
      <div
      className="tech-card"
      onClick={changeStatus}
    >
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

      <div className="tech-card__progress">
        <div className={`tech-card__progress-fill ${status}`}></div>
      </div>
    </div>

    <TechnologyNotes
        notes={notes}
        onNotesChange={onNotesChange}
        techId={id}
      />
    </>
  );
}

export default TechnologyCard;