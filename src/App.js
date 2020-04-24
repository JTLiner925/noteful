import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import STORE from "./dummy-store";
import FolderList from './Sidebar/FolderList';
import FolderPage from './Sidebar/FolderPage';
import FolderNotePage from './MainSection/FolderNotePage';
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
          <Route path='/note/:noteId'
          render={(routeProps) =>
          <>
          <FolderPage 
          {...routeProps}
          folders={STORE.folders}/>
          <FolderNotePage 
          flexBasis={3} 
          {...routeProps}
          notes={STORE.notes}
          folders={STORE.folders}/>
          </>}
          />

         
        </main>
      </div>
    );
  }
}

export default App;
