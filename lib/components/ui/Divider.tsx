import type { ClassValue } from "clsx";
import { cx } from "../../util/cx";

export const Divider = ({ className }: { className?: ClassValue }) => (
  <div className={cx("mr-1 h-4 w-px bg-gray-700/30", className)}></div>
);
