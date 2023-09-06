import { useState } from 'react';
import './App.css';
import GameEngine from './game-engine';
import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';
import { useAppSelector } from './store/hooks';

function App() {
  const [count, setCount] = useState(0);
  const { score, username } = useAppSelector((state) => state.game);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <a href="https://phaser.io/" target="_blank" rel="noreferrer">
        <img
          src="https://labs.phaser.io/assets/sprites/phaser3-logo.png"
          alt="Phaser logo"
        />
      </a>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((prevState: number) => prevState + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React or Phaser logos to learn more
      </p>
      <h2>Username: {username}</h2>
      <h3>Score: {score}</h3>
      <div style={{ width: '100%' }}>
        <div id="game-container">
          <GameEngine width={800} height={600} />
        </div>
      </div>
    </>
  );
}

export default App;
