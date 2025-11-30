import { useState } from "react";

import "./AddTechnology.css"

function AddTechnology() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = document.getElementsByClassName('add-technology__add-form')[0]
    const saved = localStorage.getItem('techTrackerData');
    const technologies = saved ? JSON.parse(saved) : [];

    const tech = {
      id: Math.max(...technologies.map(t => t.id)) + 1,
      title: title,
      description: description,
      status: status,
      notes: ''
    };
    technologies.push(tech);
    localStorage.setItem('techTrackerData', JSON.stringify(technologies));

    form.submit();
    form.reset();
  }

  return (
    <div className="add-technology">
      <div className="add-technology__header">
        <h1>Добавление технологии</h1>
      </div>

      <form className="add-technology__add-form" onSubmit={handleSubmit}>
        <label htmlFor="title" className="add-form__name">Название технологии</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="К примеру: React состояния"
          spellCheck="true"
          required
        />

        <label htmlFor="description" className="add-form__description">Описание</label>
        <textarea
          type="text"
          id="title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Кратко о чём эта технология и зачем её изучать..."
          spellCheck="true"
        />

        <label htmlFor="status" className="add-form__status">Начальный статус</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
            <option value="not-started">⏳ Планируется</option>
            <option value="in-progress">🔥 Выполняется</option>
            <option value="completed">✅ Выполнено</option>
        </select>

        <div className="add-form__form-actions">
          <button type="submit" className="btn btn-primary large">Добавить технологию</button>
        </div>
      </form>
    </div>
  );  
}
export default AddTechnology;