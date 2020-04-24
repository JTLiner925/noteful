import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  console.log(props);
  return (
    <>
      <li className="Note">
        <Link to={`/note/${props.note.id}`}>
          <h3>{props.note.name}</h3>
        </Link>
        <div className="note-basic">
          <p>Date last modified on {props.note.modified.substring(0, 10)}</p>
          <button className="deleteButton">Delete Note</button>
        </div>
      </li>
      <p className='content'>{props.note.content}</p>
    </>
  );
}
