import { useState } from 'react';
import './App.css';
import GameEngine from './game-engine';
import { useAppSelector } from './store/hooks';
import ImgLink from './components/molecules/ImgLink';
import Title from './components/atoms/Title';
import { REACT_LOGO, VITE_LOGO } from './constants/global';

function App() {
  const [count, setCount] = useState(0);
  const { score, username } = useAppSelector((state) => state.game);

  return (
    <>
      <div>
        <ImgLink href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={VITE_LOGO} className="logo" alt="Vite logo" />
        </ImgLink>
        <ImgLink href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={REACT_LOGO} className="logo react" alt="React logo" />
        </ImgLink>
      </div>
      <Title text="Vite + React" />
      <ImgLink href="https://phaser.io/" target="_blank" rel="noreferrer">
        <img
          src="https://labs.phaser.io/assets/sprites/phaser3-logo.png"
          alt="Phaser logo"
        />
      </ImgLink>
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
        Click on the Vite, React or Phaser logos to learn more.
      </p>
      <div>
        <h2>Username: {username} 👾</h2>
        <h2>Game Score: {score}</h2>
      </div>
      <div id="game-container">
        <GameEngine
          width={window.innerWidth / 2}
          height={window.innerWidth / 3}
        />
      </div>
    </>
  );
}

export default App;
