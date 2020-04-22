import React from 'react'
import { Link } from 'react-router-dom'
import STORE from '../dummy-store.js'
import './FolderList.css'

export default function FolderList() {
  return (
    <div className='FolderList'>
      <ul className='FolderListItems'>
        {STORE.folders.map(folder => 
          <li className='Folder'key={folder.id}>
            <Link to={`/${folder.id}`}>
              {folder.name}
            </Link>
          </li>  
        )}
      </ul>
      <button>Add Folder</button>
      </div>
  )
}





//import Folder.js and display all created folders
//non-active button to add folder

//active go back button using history.push('/:folder')
//h2 of current folder