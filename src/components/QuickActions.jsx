import { useRef, useState } from "react";

import Modal from "./Modal";

function QuickActions({ onMarkAllCompleted, onMarkAllNotStarted, onMarkRandomNext, onSetTechnologies, technologies }) {
  const [showExportModal, setShowExportModal] = useState(false);
  const inputImport = useRef(null);

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
  };

  const importData = (e) => {
    const file = e.target.files[0];
    const readerPromise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          try {
            resolve(JSON.parse(event.target.result));
          }
          catch {
            reject(new Error("Ошибка при импорте/парсинге файла"));
          }
        }
      }
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
    readerPromise
      .then(
        value => {
          localStorage.setItem('techTrackerData', JSON.stringify(value.technologies));
          onSetTechnologies(value.technologies)
        }
      )
      .catch(
        error => {
          alert(error);
        }
      );
  }

  return (
    <div className="quick-actions">
      <button className="quick-actions__button" onClick={onMarkAllCompleted}>✅ Отметить всё как выполненное</button>
      <button className="quick-actions__button" onClick={onMarkAllNotStarted}>⏳ Сбросить все статусы</button>
      <button className="quick-actions__button" onClick={onMarkRandomNext}>🔄️ Случайный выбор следующей технологии</button>
      <button className="quick-actions__button" onClick={exportData}>📤 Эскпорт данных</button>
      <button className="quick-actions__button" onClick={() => inputImport.current.click()}>📥 Импорт данных</button>
      <input type="file" ref={inputImport} onChange={importData} accept="application/json" hidden/>

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