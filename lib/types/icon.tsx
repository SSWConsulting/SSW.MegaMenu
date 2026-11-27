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
import { FaPhoneAlt } from "react-icons/fa/index.js";

import { Flag } from "../components/Flag";

export type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

export type AvailableIcons = keyof typeof iconMap;

export const iconMap = {
  chevronDown: (props: IconProps) => <ChevronDownIcon {...props} />,
  chevronLeft: (props: IconProps) => <ChevronLeftIcon {...props} />,
  magnifyingGlass: (props: IconProps) => <MagnifyingGlassIcon {...props} />,
  phone: (props: IconProps) => <PhoneIcon {...props} />,
  phoneAlt: (props: IconProps) => <FaPhoneAlt {...props} />,
  xMark: (props: IconProps) => <XMarkIcon {...props} />,
  chartPie: (props: IconProps) => <ChartPieIcon {...props} />,
  cursorArrowRays: (props: IconProps) => <CursorArrowRaysIcon {...props} />,
  fingerPrint: (props: IconProps) => <FingerPrintIcon {...props} />,
  squaresPlus: (props: IconProps) => <SquaresPlusIcon {...props} />,
  playCircle: (props: IconProps) => <PlayCircleIcon {...props} />,
  rectangleGroup: (props: IconProps) => <RectangleGroupIcon {...props} />,
  // The flag keeps its own size and margin rather than taking the caller's
  // className, so it looks the same wherever it's used; it still takes
  // aria-hidden like every other icon.
  chinaFlag: (props: IconProps) => (
    <Flag
      country="China"
      className="mr-2"
      alt=""
      aria-hidden={props["aria-hidden"]}
    />
  ),
};
