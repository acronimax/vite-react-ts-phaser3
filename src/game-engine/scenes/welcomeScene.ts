import Phaser from 'phaser';

export default class WelcomeScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text | undefined;

  hint: Phaser.GameObjects.Text | undefined;

  constructor() {
    super({ key: 'WelcomeScene' });
  }

  create(): void {
    const titleText: string = 'Starfall';
    this.title = this.add.text(window.innerWidth / 4, 200, titleText, {
      font: '128px Arial Bold',
      color: '#FBFBAC',
    });
    const hintText: string = 'Click to start';
    this.hint = this.add.text(window.innerWidth / 4, 350, hintText, {
      font: '24px Arial Bold',
      color: '#FBFBAC',
    });
    this.input.on(
      'pointerdown',
      () => {
        this.scene.start('GameScene');
      },
      this
    );
  }
}
