export default function TaskToolbar({
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
  onResetFilters,
}) {
  return (
    <div className="toolbar">
      <label className="searchField">
        <span>Поиск</span>
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Название или проект"
        />
      </label>

      <label className="filterField">
        <span>Статус</span>
        <select
          value={statusFilter}
          onChange={(event) => onStatusFilterChange(event.target.value)}
        >
          <option>Все</option>
          <option>Нужно сделать</option>
          <option>В работе</option>
          <option>Готово</option>
        </select>
      </label>

      <button
        className="ghostButton toolbarButton"
        type="button"
        onClick={onResetFilters}
      >
        Сбросить
      </button>
    </div>
  );
}