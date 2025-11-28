import { useState } from "react";

import Modal from "./Modal";

function QuickActions({ onMarkAllCompleted, onMarkAllNotStarted, onMarkRandomNext, technologies }) {
  const [showExportModal, setShowExportModal] = useState(false);

  const exportData = () => {
    const data = {
      exportedAt: new Date().toISOString(),
      technologies: technologies
    };
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `my-roadmap-${new Date().toISOString().slice(0,10)}`;

    document.body.appendChild(link)

    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    );

    setTimeout(() => {
      window.URL.revokeObjectURL(dataStr);
      document.body.removeChild(link);
    }, 100)
    setShowExportModal(true);
  }

  return (
    <div className="quick-actions">
      <button className="quick-actions__button" onClick={onMarkAllCompleted}>✅ Отметить всё как выполненное</button>
      <button className="quick-actions__button" onClick={onMarkAllNotStarted}>⏳ Сбросить все статусы</button>
      <button className="quick-actions__button" onClick={onMarkRandomNext}>🔄️ Случайный выбор следующей технологии</button>
      <button className="quick-actions__button" onClick={exportData}>📥 Эскпорт данных</button>

      <Modal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        title="Эскпортирование данных"
      >
        <p>Данные успешно подготовлены для эскпорта!</p>
        <p>Итоговое имя файла: <strong>my-roadmap-{new Date().toISOString().slice(0,10)}.json</strong></p>
        <pre>
          <code>
            {JSON.stringify({
              exportData: new Date().toISOString(),
              technologies: technologies
            }, null, 2)}
          </code>
        </pre>
      </Modal>
    </div>
  );
}

export default QuickActions;