import { AnchorHTMLAttributes, ReactNode } from 'react';

type PropsWithChildren<P> = P & { children: ReactNode };

function ImgLink({
  children,
  href,
  rel,
  target,
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a href={href} rel={rel} target={target}>
      {children}
    </a>
  );
}
export default ImgLink;
