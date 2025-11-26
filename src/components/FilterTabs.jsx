function FilterTabs({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'Все'},
    { key: 'completed', label: 'Выполненные'},
    { key: 'in-progress', label: 'В процессе'},
    { key: 'not-started', label: 'Планируются'}
  ];
  
  return (
    <div className="filter-tabs">
        {filters.map(f => (
            <button
              key={f.key}
              className={`filter-tabs__button ${currentFilter == f.key ? 'active' : ''}`}
              onClick={() => onFilterChange(f.key)}
            >
                {f.label}
            </button>
        ))}
    </div>
  );
}

export default FilterTabs;