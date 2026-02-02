import React from 'react';
import { X, Edit2, Check } from 'lucide-react';

export default function NoteItem({
  note,
  index,
  editingId,
  editText,
  setEditText,
  toggleComplete,
  startEdit,
  saveEdit,
  deleteNote,
}) {
  return (
    <div
      className="bg-white rounded-xl shadow-md border border-slate-200/50 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] group"
      style={{
        animation: 'fadeIn 0.3s ease-out',
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'backwards',
      }}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={() => toggleComplete(note.id)}
          className={`mt-1 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
            note.completed
              ? 'bg-indigo-500 border-indigo-500'
              : 'border-slate-300 hover:border-indigo-400'
          }`}
        >
          {note.completed && <Check size={14} className="text-white" />}
        </button>

        {/* Contenido */}
        <div className="flex-1">
          {editingId === note.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
              className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          ) : (
            <p
              className={`text-slate-800 transition-all duration-300 ${
                note.completed ? 'line-through opacity-50' : ''
              }`}
            >
              {note.text}
            </p>
          )}
          <p className="text-xs text-slate-400 mt-1">
            {new Date(note.createdAt).toLocaleString('es-ES')}
          </p>
        </div>

        {/* Acciones */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {editingId === note.id ? (
            <button
              onClick={saveEdit}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <Check size={18} />
            </button>
          ) : (
            <button
              onClick={() => startEdit(note.id, note.text)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Edit2 size={18} />
            </button>
          )}
          <button
            onClick={() => deleteNote(note.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
