import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Mills from './modules/Mills';
import Bernulli from './modules/Bernulli';
import Simple from './modules/Simple';


function App() {
  const [model, setModel] = useState('M');

  function showModel() {
    if (model === 'M') return <Mills />
    if (model === 'B') return <Bernulli />
    if (model === 'S') return <Simple />
  }

  return (
    <div className="app">
      <Menu setModel={setModel}/>

      <div className='app-models'>
        {showModel()}
      </div>
    </div>
  );
}

export default App;
