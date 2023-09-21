import type { FC } from 'react';
import './App.css';
import GameEngine from './game-engine';
import { useAppSelector } from './store/hooks';
import TechnologyLogo from './components/organism/TechnologyLogo';

const App: FC = () => {
  const { score, username } = useAppSelector((state) => state.game);
  return (
    <>
      <TechnologyLogo />
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
};

export default App;
