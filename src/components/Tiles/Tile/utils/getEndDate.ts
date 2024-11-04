import dayjs from "dayjs";
import { weekWidth, dayWidth, zoom2ColumnWidth } from "@/constants";
import { GetEndDateProps } from "./types";

export const getEndDate = ({ startDate, position, zoom }: GetEndDateProps) => {
  let timeUnit: dayjs.ManipulateType = "weeks";
  let currBoxWidth;

  switch (zoom) {
    case 0:
      timeUnit = "weeks";
      currBoxWidth = weekWidth;
      break;
    case 1:
      timeUnit = "days";
      currBoxWidth = dayWidth;
      break;
    case 2:
      timeUnit = "hours";
      currBoxWidth = zoom2ColumnWidth;
      break;
  }

  const column =
    zoom === 2
      ? Math.ceil((position - 0.5 * currBoxWidth) / currBoxWidth)
      : Math.ceil(position / currBoxWidth);

  const endDay = dayjs(
    `${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}T${startDate.hour}:00:00`
  ).add(column - 1, timeUnit);

  return endDay.toDate();
};
