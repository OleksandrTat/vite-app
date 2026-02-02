import React from 'react';
import Header from './Header';
import StatsCard from './StatsCard';
import NoteInput from './NoteInput';
import FilterButtons from './FilterButtons';
import NoteList from './NoteList';
import { useNotes } from './useNotes';

export default function App() {
  const {
    newNote,
    setNewNote,
    editingId,
    editText,
    setEditText,
    filter,
    setFilter,
    addNote,
    deleteNote,
    toggleComplete,
    startEdit,
    saveEdit,
    filteredNotes,
    stats,
  } = useNotes();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <StatsCard stats={stats} />

        <NoteInput newNote={newNote} setNewNote={setNewNote} addNote={addNote} />

        <FilterButtons filter={filter} setFilter={setFilter} />

        <NoteList
          filteredNotes={filteredNotes}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          toggleComplete={toggleComplete}
          startEdit={startEdit}
          saveEdit={saveEdit}
          deleteNote={deleteNote}
        />
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
