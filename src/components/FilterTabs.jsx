function FilterTabs({ currentFilter, onFilterChange, onQueryChange }) {
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
        <input
          type="search"
          className="filter-tabs__search"
          onChange={(e) => onQueryChange(e.target.value)}
          spellCheck="true"
        />
    </div>
  );
}

export default FilterTabs;