import { CustomLink } from "../CustomLink";

type MenuItemLinkProps = {
  name: string;
  href: string;
};

export const MenuItemLink = ({ name, href }: MenuItemLinkProps) => {
  return (
    <CustomLink
      href={href}
      className="unstyled flex items-center justify-center rounded-md px-3 py-1"
    >
      {name}
    </CustomLink>
  );
};
