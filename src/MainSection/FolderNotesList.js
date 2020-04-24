import React from "react";
import "./NoteList.css";
import Note from "./Note";

export default function FolderNotesList(props) {
  let { folderId } = props.match.params;

  const notes = props.notes.filter(n =>
    folderId ? n.folderId === folderId : n
  );
  return (
    <div className="NoteList">
      <ul className="NoteListItems">
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <button>Add Note</button>
    </div>
  );
}
