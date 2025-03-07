import dayjs from "dayjs";
import { boxHeight, tileYOffset } from "@/constants";
import { TileProperties } from "@/types/global";
import { getTileXAndWidth } from "./getTileXAndWidth";

export const getTileProperties = (
  row: number,
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs,
  resourceStartDate: string | null,
  resourceEndDate: string | null,
  zoom: number
): TileProperties => {
  const y = row * boxHeight + tileYOffset;
  let parsedResourceStartDate;
  let parsedResourceEndDate;
  let parsedStartDate;
  let parsedEndDate;

  switch (zoom) {
    default: {
      parsedResourceStartDate = dayjs(resourceStartDate).hour(0).minute(0);
      parsedResourceEndDate = dayjs(resourceEndDate).hour(23).minute(59);
      parsedStartDate = startDate;
      parsedEndDate = endDate;
      break;
    }
  }

  return {
    ...getTileXAndWidth(
      { startDate: parsedResourceStartDate, endDate: parsedResourceEndDate },
      { startDate: parsedStartDate, endDate: parsedEndDate },
      zoom
    ),
    y
  };
};
