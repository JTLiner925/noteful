import React from "react";
import STORE from "../dummy-store.js";
import "./NoteList.css";

export default function FolderNotesList(props) {
  console.log(props)
  const note = STORE.notes.find(n => n.folderId === props.match.params.folderId);

  // const newStyles = { flex: props.flexBasis }
  return (
    <div className="NoteList">
      <ul className="NoteListItems">
        <li className="Note" key={note.id}>
          <h3>{note.name}</h3>
          <div className="note-basic">
            <p>Date last modified on {note.modified.substring(0, 10)}</p>
            <button className="deleteButton">Delete Note</button>
          </div>
        </li>
      </ul>
      <button>Add Note</button>
    </div>
  );
}
