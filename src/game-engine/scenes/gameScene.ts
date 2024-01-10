import Phaser from 'phaser';
import Store from '../../store/store';
import { updateScore } from '../../feature/gameSlice';

export default class GameScene extends Phaser.Scene {
  delta: number = 0;

  lastStarTime: number = 0;

  starsCaught: number = 0;

  starsFallen: number = 0;

  sand: Phaser.Physics.Arcade.StaticGroup | undefined;

  info: Phaser.GameObjects.Text | undefined;

  constructor() {
    super({ key: 'GameScene' });
  }

  init(): void {
    this.delta = 1000;
  }

  preload(): void {
    this.load.setBaseURL('https://cdn-icons-png.flaticon.com/512/616/');
    this.load.image('star', '616490.png');
  }

  create(): void {
    this.sand = this.physics.add.staticGroup({
      key: 'sand',
      frameQuantity: 30,
    });
    Phaser.Actions.PlaceOnLine(
      this.sand.getChildren(),
      new Phaser.Geom.Line(20, 580, 820, 580)
    );
    this.sand.refresh();
    this.info = this.add.text(10, 10, '', {
      font: '24px Arial Bold',
      color: '#FBFBAC',
    });
  }

  update(time: number): void {
    const diff: number = time - this.lastStarTime;
    if (diff > this.delta) {
      this.lastStarTime = time;
      if (this.delta > 500) {
        this.delta -= 30;
      }
      this.emitStar();
    }
    if (this.info !== undefined) {
      this.info.text = `user: ${Store.getState().game.username} || ${
        this.starsCaught
      } caught - ${this.starsFallen} fallen (max 3)`;
    }
  }

  private onClick(star: Phaser.Physics.Arcade.Image): () => void {
    return () => {
      star.setTint(0x00ff00);
      star.setVelocity(0, 0);
      this.starsCaught += 1;
      this.time.delayedCall(
        200,
        (starParam: Phaser.Physics.Arcade.Image) => {
          starParam.destroy();
        },
        [star],
        this
      );
    };
  }

  private onFall(star: Phaser.Physics.Arcade.Image): () => void {
    return () => {
      star.setTint(0xff0000);
      this.starsFallen += this.starsFallen;
      this.time.delayedCall(
        1500,
        (starParam: Phaser.Physics.Arcade.Image) => {
          starParam.destroy();
          if (this.starsCaught > 2) {
            Store.dispatch(updateScore(this.starsCaught));
            this.scene.start('ScoreScene', { starsCaught: this.starsCaught });
          }
        },
        [star],
        this
      );
    };
  }

  private emitStar(): void {
    const star: Phaser.Physics.Arcade.Image = this.physics.add.image(
      Phaser.Math.Between(0, window.innerWidth),
      30,
      'star'
    );
    star.setDisplaySize(50, 50);
    star.setVelocity(Math.random(), Math.random());
    star.setInteractive();
    star.on('pointerdown', this.onClick(star), this);
    if (this.sand !== undefined) {
      this.physics.add.collider(
        star,
        this.sand,
        this.onFall(star),
        undefined,
        this
      );
    }
  }
}
