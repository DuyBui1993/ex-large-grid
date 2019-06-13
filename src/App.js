import React from 'react';
import CanvasDatagrid from './components/CanvasDatagrid'
import { HARD_DATA, SCHEMA } from './utils/LargeTable'
import './App.css';

function App() {
  return (
    <div className="App">
      <CanvasDatagrid style={{ width: '100%', height: '100vh'}} data={HARD_DATA} schema={SCHEMA} />
    </div>
  );
}

export default App;
