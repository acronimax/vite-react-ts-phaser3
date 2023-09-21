import type { FC, HTMLAttributes } from 'react';
interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Title: FC<TitleProps> = (props) => {
  return <h1 {...props}>{props.text}</h1>;
};
export default Title;
