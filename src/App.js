import React from 'react';
import './App.css';
import Header from './Header.js';
import images from './CreatureData.js';
import CreatureList from './CreatureList';

function App() {
  return (
    <div>
    <header>
      <Header />
    </header>
    <body>
      <CreatureList creatures={images} />
    </body>
    </div>
  );
}

export default App;