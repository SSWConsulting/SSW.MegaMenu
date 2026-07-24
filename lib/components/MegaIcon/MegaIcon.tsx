import React from "react";
import { AvailableIcons, iconMap } from "../../types/icon";
import { ICON_IMAGE_SIZES, IconSizes } from "../../util/constants";
import { cx } from "../../util/cx";
import { CustomImage } from "../CustomImage";

const MegaIconMapper = ({
  icon,
  className,
}: {
  icon: AvailableIcons;
  className?: string;
}) => {
  const Icon = iconMap[icon];

  if (!Icon) {
    return <></>;
  }

  return <Icon className={className} />;
};

export interface MegaIconProps {
  // TODO: implement below intended solution extends React.ComponentPropsWithoutRef<"span"> {
  iconImg?: string;
  iconImgDarkMode?: string;
  icon?: AvailableIcons;
  imgSize?: IconSizes;
  className?: string;
}

export const MegaIcon: React.FC<MegaIconProps> = ({
  icon,
  iconImg,
  iconImgDarkMode,
  imgSize = "small",
  className,
}) => {
  //if icon is an SVGElement, just return it with props spread into it
  // if (icon instanceof SVGElement) {
  //   return <span {...props}>{icon}</span>;
  // }

  if (!iconImg && icon) {
    return (
      <>
        <span className="sr-only">{icon}</span>
        <MegaIconMapper aria-hidden="true" icon={icon} className={className} />
      </>
    );
  }

  // When a dark-mode icon is supplied, render both and toggle with `dark:` so the
  // swap resolves from the `.dark` scope in CSS (no JS, no flash); most products
  // have no dark variant and just render the single default icon.
  return (
    <div>
      <CustomImage
        className={cx(
          ICON_IMAGE_SIZES[imgSize],
          iconImgDarkMode && "dark:hidden",
        )}
        src={iconImg}
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
      />
      {iconImgDarkMode && (
        <CustomImage
          className={cx(ICON_IMAGE_SIZES[imgSize], "hidden dark:block")}
          src={iconImgDarkMode}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default MegaIcon;
