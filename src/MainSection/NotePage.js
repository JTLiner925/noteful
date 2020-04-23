import React from 'react'
import STORE from '../dummy-store.js'
import './NoteList.css'

export default function NotePage(props) {
  // const newStyles = { flex: props.flexBasis }
  return (
    <div className='NoteList'>
      <ul className='NoteListItems'>
        {STORE.notes.map(note =>
          <li className='Note' key={note.id}>
            <h3>{note.name}</h3>
            <div className='note-basic'>
            <p>Date last modified on {note.modified.substring(0,10)}</p>
            <button className='deleteButton'>Delete Note</button>
            </div>
          </li>
        )}
      </ul>
      <button>Add Note</button>
    </div>
  )
}



//list of notes from current folder with notes.name and notes.modified
//non-active delete button

//non-active add-note button