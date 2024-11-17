import dayjs from "dayjs";
import { weekWidth, dayWidth, zoom2ColumnWidth } from "@/constants";
import { GetCalendarDateProps } from "./types";

export const getCalendarDate = ({ calendarStartDate, position, zoom }: GetCalendarDateProps) => {
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

  const date = dayjs(
    `${calendarStartDate.year}-${calendarStartDate.month + 1}-${calendarStartDate.dayOfMonth}T${
      calendarStartDate.hour
    }:00:00`
  ).add(column - 1, timeUnit);

  return date.toDate();
};