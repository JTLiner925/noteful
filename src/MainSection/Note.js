import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <li className="Note">
      <Link to={`/note/${props.note.id}`}>
        <h3>{props.note.name}</h3>
      </Link>
      <div className="note-basic">
        <p>Date last modified on {props.note.modified.substring(0, 10)}</p>
        <button className="deleteButton">Delete Note</button>
      </div>
    </li>
  );
}

//note with notes.name and notes.modified
//non-active delete button

//underneath is content using notes.content
