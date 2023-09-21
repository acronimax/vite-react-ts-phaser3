import type { FC } from 'react';
import ImgLink from '../molecules/ImgLink';
import { REACT_LOGO, VITE_LOGO } from '../../constants/global';

const TechnologyLogo: FC = () => {
  return (
    <>
      <ImgLink href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={VITE_LOGO} className="logo" alt="Vite logo" />
      </ImgLink>
      <ImgLink href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={REACT_LOGO} className="logo react" alt="React logo" />
      </ImgLink>
      <ImgLink href="https://phaser.io/" target="_blank" rel="noreferrer">
        <img
          src="https://labs.phaser.io/assets/sprites/phaser3-logo.png"
          alt="Phaser logo"
        />
      </ImgLink>
      <p className="read-the-docs">
        Click on the Vite, React or Phaser logos to learn more.
      </p>
    </>
  );
};
export default TechnologyLogo;
