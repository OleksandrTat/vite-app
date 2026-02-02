import { useState } from 'react';

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');

  // Agregar nueva nota
  const addNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          text: newNote,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewNote('');
    }
  };

  // Eliminar nota
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Alternar completado
  const toggleComplete = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  // Iniciar edición
  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Guardar edición
  const saveEdit = () => {
    if (editText.trim()) {
      setNotes(
        notes.map((note) =>
          note.id === editingId ? { ...note, text: editText } : note
        )
      );
    }
    setEditingId(null);
    setEditText('');
  };

  // Filtrar notas
  const filteredNotes = notes.filter((note) => {
    if (filter === 'active') return !note.completed;
    if (filter === 'completed') return note.completed;
    return true;
  });

  // Estadísticas
  const stats = {
    total: notes.length,
    active: notes.filter((n) => !n.completed).length,
    completed: notes.filter((n) => n.completed).length,
  };

  return {
    notes,
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
  };
}
