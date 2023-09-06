import Phaser from 'phaser';

export interface Score {
  starsCaught: number;
}

export default class ScoreScene extends Phaser.Scene {
  score: number = 0;

  result: Phaser.GameObjects.Text | undefined;

  hint: Phaser.GameObjects.Text | undefined;

  constructor() {
    super({ key: 'ScoreScene' });
  }

  init(params: Score): void {
    this.score = params.starsCaught;
  }

  create(): void {
    const resultText: string = `Your score is ${this.score}!`;
    this.result = this.add.text(200, 250, resultText, {
      font: '48px Arial Bold',
      color: '#FBFBAC',
    });
    const hintText: string = 'Click to restart';
    this.hint = this.add.text(300, 350, hintText, {
      font: '24px Arial Bold',
      color: '#FBFBAC',
    });
    this.input.on(
      'pointerdown',
      () => {
        setTimeout(() => {
          this.scene.start('WelcomeScene');
        }, 300);
      },
      this
    );
  }
}
