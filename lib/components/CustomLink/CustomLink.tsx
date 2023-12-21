import React from "react";

export type CustomLinkProps = {
  href: string;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const CustomLink = ({ href, className, children }: CustomLinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
