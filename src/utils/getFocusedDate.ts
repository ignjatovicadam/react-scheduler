import dayjs from "dayjs";
import { weekWidth, dayWidth } from "@/constants";
import { Day, ZoomLevel } from "@/types/global";

export const getFocusedDate = (
  startDate: Day,
  position: number,
  zoom: ZoomLevel,
  start: Date,
  end: Date
) => {
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
  }

  const column = Math.ceil(position / currBoxWidth);

  const startDay = dayjs(
    `${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}T${startDate.hour}:00:00`
  ).add(column - 1, timeUnit);

  const daysDifference = dayjs(end).diff(start, "day");
  const endDay = startDay.add(daysDifference, "day");

  return {
    start: startDay.toDate(),
    end: endDay.toDate()
  };
};
