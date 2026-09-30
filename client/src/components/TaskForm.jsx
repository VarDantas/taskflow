import { useEffect, useState } from 'react';

const emptyForm = {
  title: '',
  project: '',
  status: 'Нужно сделать',
  priority: 'Средний',
  dueDate: '',
};

export default function TaskForm({ task, onSave, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        project: task.project,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate,
      });
      return;
    }
    setFormData(emptyForm);
  }, [task]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = formData.title.trim();
    const project = formData.project.trim();

    if (!title || !project || !formData.dueDate) {
      return;
    }

    onSave({
      title,
      project,
      status: formData.status,
      priority: formData.priority,
      dueDate: formData.dueDate,
    });
  }

  return (
    <div className="modalOverlay">
      <section className="taskFormCard">
        <div className="formHeading">
          <h2>{task ? 'Редактировать задачу' : 'Новая задача'}</h2>
          <button className="iconButton" type="button" onClick={onCancel}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formGrid">
            <label className="field fieldWide">
              <span>Название</span>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Например: подготовить презентацию"
                autoFocus
              />
            </label>

            <label className="field fieldWide">
              <span>Проект</span>
              <input
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Например: Учебный проект"
              />
            </label>

            <label className="field">
              <span>Статус</span>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Нужно сделать</option>
                <option>В работе</option>
                <option>Готово</option>
              </select>
            </label>

            <label className="field">
              <span>Приоритет</span>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Низкий</option>
                <option>Средний</option>
                <option>Высокий</option>
              </select>
            </label>

            <label className="field fieldWide">
              <span>Срок</span>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="formActions">
            <button className="ghostButton" type="button" onClick={onCancel}>
              Отмена
            </button>
            <button className="primaryButton" type="submit">
              {task ? 'Сохранить изменения' : 'Создать задачу'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}