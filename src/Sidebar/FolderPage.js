import React from "react";
import "./FolderList.css";

export default function FolderPage(props) {
  let { folderId } = props.match.params;
  const folder = props.folders.find(folder =>
    folderId ? folder.id === folder : folder
  );

  return (
    <div className="FolderList">
      <ul className="FolderListItems">
        <li className="Folder" key={folder.id}>
          {folder.name}
        </li>
      </ul>
      <button>Go Back</button>
    </div>
  );
}
