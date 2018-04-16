import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentsAddContainer from './CommentsAddContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      	<CommentsAddContainer />
      	<CommentsListContainer />
      	<DevTools />
    </div>
  );
};

export default App;