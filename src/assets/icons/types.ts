import type { ComponentProps, FunctionComponent } from "react";

export type IconsNames =
  | "add"
  | "subtract"
  | "filter"
  | "arrowLeft"
  | "arrowRight"
  | "defaultAvatar"
  | "calendarWarning"
  | "chevronDown"
  | "calendarFree"
  | "arrowUp"
  | "arrowDown"
  | "search"
  | "close"
  | "letterM"
  | "letterY"
  | "moon"
  | "sun";

export type Icon = FunctionComponent<ComponentProps<"svg"> & { title?: string }>;
