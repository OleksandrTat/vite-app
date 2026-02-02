import React from 'react';
import { Plus } from 'lucide-react';

export default function NoteInput({ newNote, setNewNote, addNote }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 p-6 mb-8 transition-all duration-300 hover:shadow-xl">
      <div className="flex gap-3">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addNote()}
          placeholder="Escribe una nueva nota..."
          className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder-slate-400"
        />
        <button
          onClick={addNote}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 font-medium"
        >
          <Plus size={20} />
          Agregar
        </button>
      </div>
    </div>
  );
}
