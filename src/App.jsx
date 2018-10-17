import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import './App.css';
import Editor from './components/editor';
import Viewer from './components/viewer';

const App = () => {
  const width = window.innerHeight;

  return (
    <SplitPane split="vertical" defaultSize={width}>
      <Editor />
      <Viewer />
    </SplitPane>
  );
}

export default App;
