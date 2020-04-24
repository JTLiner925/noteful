import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import STORE from "./dummy-store";
import FolderList from './Sidebar/FolderList';
import Folder from './Sidebar/Folder';
import FolderNotesList from './MainSection/FolderNotesList';
// import Note from './MainSection/Note';
import "./App.css";
class App extends Component {
  
  // create updateMain(){

  // } 
  //- depending on the page it
  //renders different content
  // create updateSidebar(){

  // }
  

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main>
          <Route exact path='/' 
          // component={FolderList}
          render={(routeProps) =>
            <>
          <FolderList />
          <FolderNotesList flexBasis={3}
          {...routeProps}
          notes={STORE.notes} />
          
          </>}
          />
          <Route path='/folder/:folderId' 
          render={(routeProps) => 
          <>
          <FolderList />
          <FolderNotesList 
          flexBasis={3} 
          {...routeProps}
          notes={STORE.notes}/>
          </>}
          />

         
        </main>
      </div>
    );
  }
}

export default App;
