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

import { Flag } from "../components/Flag";

export type IconProps = {
  className?: string;
};

export type AvailableIcons = keyof typeof iconMap;

export const iconMap = {
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
