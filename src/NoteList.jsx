import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({
  filteredNotes,
  editingId,
  editText,
  setEditText,
  toggleComplete,
  startEdit,
  saveEdit,
  deleteNote,
}) {
  if (filteredNotes.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-lg font-light">No hay notas aquí</p>
        <p className="text-sm mt-2">Agrega tu primera nota arriba</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredNotes.map((note, index) => (
        <NoteItem
          key={note.id}
          note={note}
          index={index}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          saveEdit={saveEdit}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
