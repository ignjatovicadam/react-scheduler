import { dayWidth, singleDayWidth, singleDayWidthExtended, zoom2ColumnWidth } from "@/constants";
import { DatesRange } from "./getDatesRange";

export const getTileXAndWidth = (item: DatesRange, range: DatesRange, zoom: number) => {
  let cellWidth: number;
  switch (zoom) {
    case 1:
      cellWidth = singleDayWidth;
      break;
    case 2:
      cellWidth = dayWidth;
      break;
    default:
      cellWidth = singleDayWidthExtended;
      break;
  }

  const getX = () => {
    let position;
    switch (zoom) {
      default: {
        position = (item.startDate.diff(range.startDate, "day") + 1) * cellWidth;
      }
    }
    return Math.max(0, position);
  };

  if (item.startDate.isAfter(range.startDate) && item.endDate.isBefore(range.endDate)) {
    let width;
    switch (zoom) {
      default:
        width = item.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;
    }

    return { x: getX(), width };
  }

  if (item.startDate.isBefore(range.startDate) && item.endDate.isBefore(range.endDate)) {
    let width;
    switch (zoom) {
      default:
        width = item.endDate.diff(range.startDate, "day") * cellWidth + cellWidth;
    }

    return { x: getX(), width };
  }

  if (item.startDate.isAfter(range.startDate) && item.endDate.isAfter(range.endDate)) {
    let width;
    switch (zoom) {
      default:
        width = range.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;
    }

    return { x: getX(), width };
  }

  if (item.startDate.isBefore(range.startDate) && item.endDate.isAfter(range.endDate)) {
    let width;
    switch (zoom) {
      default:
        width = range.endDate.diff(range.startDate, "day") * cellWidth + cellWidth;
    }

    return { x: getX(), width };
  }
  return { x: getX(), width: 0 };
};
