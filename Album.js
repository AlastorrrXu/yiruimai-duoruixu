import React from 'react';
import Album from './components/Album';
import MusicPlayer from './components/MusicPlayer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>麦一芮和徐铎瑞的故事</h1>
      </header>
      <main>
        <Album />
        <MusicPlayer />
      </main>
    </div>
  );
}

export default App;
