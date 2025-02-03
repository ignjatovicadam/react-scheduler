import {
  weekWidth,
  dayWidth,
  outsideWrapperId,
  leftColumnWidth,
  screenWidthMultiplier,
  weekWidthExtended
} from "@/constants";

export const getCols = (zoom: number) => {
  const wrapperWidth = document.getElementById(outsideWrapperId)?.clientWidth || 0;
  const componentWidth = wrapperWidth - leftColumnWidth;

  switch (zoom) {
    case 1:
      return Math.ceil(componentWidth / weekWidth) * screenWidthMultiplier;
    case 2:
      return Math.ceil(componentWidth / dayWidth) * screenWidthMultiplier;
    default:
      return Math.ceil(componentWidth / weekWidthExtended) * screenWidthMultiplier;
  }
};

export const getVisibleCols = (zoom: number) => getCols(zoom) / screenWidthMultiplier;
