import { useLinkComponent } from "../../hooks/useLinkComponent";

type MenuItemLinkProps = {
  name: string;
  href: string;
};

export const MenuItemLink = ({ name, href }: MenuItemLinkProps) => {
  const CustomLink = useLinkComponent();

  return (
    <CustomLink
      href={href}
      className="flex items-center justify-center rounded-md px-3 py-1 hover:text-ssw-red"
    >
      {name}
    </CustomLink>
  );
};
