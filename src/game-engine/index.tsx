import { FC, useEffect } from 'react';
import Phaser from 'phaser';
import GameScene from './scenes/gameScene';
import ScoreScene from './scenes/scoreScene';
import WelcomeScene from './scenes/welcomeScene';

type GameEngineProps = {
  width: number;
  height: number;
};

const GameEngine: FC<GameEngineProps> = ({ height, width }) => {
  useEffect(() => {
    const phaser = new Phaser.Game({
      width,
      height,
      type: Phaser.AUTO,
      backgroundColor: '#000033',
      title: 'Starfall',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 1500,
          },
          debug: false,
        },
      },
      scale: {
        parent: 'game-container',
        autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY,
      },
      scene: [WelcomeScene, GameScene, ScoreScene],
    });
    return () => phaser.destroy(true);
  }, [height, width]);

  return <div id="phaser-game" />;
};
export default GameEngine;
