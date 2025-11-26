function QuickActions({ onMarkAllCompleted, onMarkAllNotStarted, onMarkRandomNext }) {
  return (
    <div className="quick-actions">
      <button className="quick-actions__button" onClick={onMarkAllCompleted}>✅ Отметить всё как выполненное</button>
      <button className="quick-actions__button" onClick={onMarkAllNotStarted}>⏳ Сбросить все статусы</button>
      <button className="quick-actions__button" onClick={onMarkRandomNext}>🔄️ Случайный выбор следующей технологии</button>
    </div>
  );
}

export default QuickActions;