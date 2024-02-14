import React from "react";
import { AvailableIcons, iconMap } from "../../types/icon";
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
  icon?: AvailableIcons;
  className?: string;
}

export const MegaIcon: React.FC<MegaIconProps> = ({
  icon,
  iconImg,
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

  return (
    <div>
      <CustomImage
        className="h-5 w-5"
        src={iconImg}
        alt={iconImg}
        width={20}
        height={20}
        aria-hidden="true"
      />
    </div>
  );
};

export default MegaIcon;
