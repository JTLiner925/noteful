import React from "react";
import STORE from "../dummy-store.js";
import "./NoteList.css";
import Note from './Note';

export default function FolderNotesList(props) {
  console.log(props)
  let { folderId }= props.match.params
  console.log(folderId)
  const notes = props.notes.filter(n => folderId ? n.folderId === folderId: n);

  // const newStyles = { flex: props.flexBasis }
  return (
    <div className="NoteList">
      <ul className="NoteListItems">
        {notes.map(note =>
          <Note 
          key={note.id}
          note ={note}
          />
        )}
      </ul>
      <button>Add Note</button>
    </div>
  );
}
