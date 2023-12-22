import {
  ChevronDownIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { CustomImage } from "../CustomImage";
import { Flag } from "../Flag";

type IconProps = {
  className?: string;
};

export type AvailableIcons = keyof typeof iconMap;

const iconMap = {
  chevronDown: (props: IconProps) => (
    <ChevronDownIcon className={props.className} />
  ),
  chevronLeft: (props: IconProps) => (
    <ChevronLeftIcon className={props.className} />
  ),
  magnifyingGlass: (props: IconProps) => (
    <MagnifyingGlassIcon className={props.className} />
  ),
  phone: (props: IconProps) => <PhoneIcon className={props.className} />,
  xMark: (props: IconProps) => <XMarkIcon className={props.className} />,
  chartPie: (props: IconProps) => <ChartPieIcon className={props.className} />,
  cursorArrowRays: (props: IconProps) => (
    <CursorArrowRaysIcon className={props.className} />
  ),
  fingerPrint: (props: IconProps) => (
    <FingerPrintIcon className={props.className} />
  ),
  squaresPlus: (props: IconProps) => (
    <SquaresPlusIcon className={props.className} />
  ),
  playCircle: (props: IconProps) => (
    <PlayCircleIcon className={props.className} />
  ),
  rectangleGroup: (props: IconProps) => (
    <RectangleGroupIcon className={props.className} />
  ),
  chinaFlag: () => <Flag country="China" className="mr-2" />,
};

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
