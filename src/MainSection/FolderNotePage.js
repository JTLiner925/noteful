import React from "react";
import "./NoteList.css";
import NotePage from "./NotePage";

export default function FolderNotePage(props) {
  let { noteId } = props.match.params;
  let note = props.notes.find(n => n.id === noteId);

  return (
    <div className="NoteList">
      <ul className="NoteListItems">
        <NotePage key={note.id} note={note} />
      </ul>
      <button>Add Note</button>
    </div>
  );
}
