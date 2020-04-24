import React from 'react'

export default function Note(props) {
  return (
          <li className='Note'>
            <h3>{props.note.name}</h3>
            <div className='note-basic'>
            <p>Date last modified on {props.note.modified.substring(0,10)}</p>
            <button className='deleteButton'>Delete Note</button>
            </div>
          </li>
  )
}




//note with notes.name and notes.modified
//non-active delete button

//underneath is content using notes.content