import React from 'react';

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm border-b border-slate-200/50 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
      <div className="relative max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-light tracking-tight text-slate-900 mb-2">
          Notas
        </h1>
        <p className="text-slate-500 font-light">
          Tu espacio para ideas y tareas
        </p>
      </div>
    </div>
  );
}
