import React from 'react';

export default function FilterButtons({ filter, setFilter }) {
  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'active', label: 'Activas' },
    { id: 'completed', label: 'Completadas' },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => setFilter(f.id)}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
            filter === f.id
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
