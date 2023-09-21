import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

const ImgLink: FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = (props) => {
  return <a {...props}>{props.children}</a>;
};
export default ImgLink;
