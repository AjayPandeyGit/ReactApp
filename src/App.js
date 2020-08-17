import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Todo from './Components/Todo';
import ToRead from './Components/ToRead';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <FontAwesomeIcon icon={faTimes} className="close-icn" /> Action Items
      </header>

      <Tabs className="tab-wrap">
        <TabLink to="tab1" className="tab">To Do</TabLink>
        <TabLink to="tab2" className="tab">To Read</TabLink>

        <TabContent for="tab1"><Todo /></TabContent>
        <TabContent for="tab2"><ToRead /></TabContent>
      </Tabs>

    </div>
  );
}

export default App;
