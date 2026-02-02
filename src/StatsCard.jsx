import React from 'react';

export default function StatsCard({ stats }) {
  const statsData = [
    { label: 'Total', value: stats.total, color: 'bg-slate-100 text-slate-700' },
    { label: 'Activas', value: stats.active, color: 'bg-blue-100 text-blue-700' },
    { label: 'Completadas', value: stats.completed, color: 'bg-indigo-100 text-indigo-700' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {statsData.map((stat, i) => (
        <div
          key={stat.label}
          className={`${stat.color} rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="text-3xl font-light mb-1">{stat.value}</div>
          <div className="text-sm font-medium opacity-70">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
