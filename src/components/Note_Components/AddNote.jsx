import React from 'react';
import './AddNote.css'
import { useState } from 'react';
import Display from "./Display"

const AddNote = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  const handleClick = () => {
    setShowForm(!showForm);
  }

  const addNote = (text) => {
    setNotes([...notes, text]);
  }

  return (
    <>
      <button type="submit" className="Add" onClick={handleClick}>Add Note</button>
      {showForm && <Form onSave={addNote} />}
      <div className="notes-grid">
        {notes.map((note, index) => (
          <Display key={index} value={note} />
        ))}
      </div>
    </>
  );
};

const Form = ({ onSave }) => {
  const [text, setText] = useState("");
  const [show, setShowForm] = useState(true);
  
  const handleSave = (e) => {
    e.preventDefault();
    console.log(text);
    onSave(text);
    setText("");
    setShowForm(false);
  };

  return (
    <>
      {show && (
        <div className="add-note-container">
          <form>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your note here..."
            />
            <button type="submit" onClick={handleSave}>Save</button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddNote;