import dayjs from "dayjs";
import { weekWidth, dayWidth, weekWidthExtended } from "@/constants";
import { GetCalendarDateProps } from "./types";

export const getCalendarDate = ({ calendarStartDate, position, zoom }: GetCalendarDateProps) => {
  let timeUnit: dayjs.ManipulateType = "weeks";
  let currBoxWidth;

  switch (zoom) {
    case 0:
      timeUnit = "weeks";
      currBoxWidth = weekWidthExtended;
      break;
    case 1:
      timeUnit = "weeks";
      currBoxWidth = weekWidth;
      break;
    case 2:
      timeUnit = "days";
      currBoxWidth = dayWidth;
      break;
  }

  const column = Math.ceil(position / currBoxWidth);

  const date = dayjs(
    `${calendarStartDate.year}-${calendarStartDate.month + 1}-${calendarStartDate.dayOfMonth}T${
      calendarStartDate.hour
    }:00:00`
  ).add(column - 1, timeUnit);

  return date.format("MM/DD/YYYY");
};
