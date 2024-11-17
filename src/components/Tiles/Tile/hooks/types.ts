import { Day, ZoomLevel } from "@/types/global";

export type useResizeProps = {
  tileWidth: number;
  tilePositionX: number;
  tileStartDate: Date;
  tileEndDate: Date;
  tileId: string;
  calendarStartDate: Day;
  zoom: ZoomLevel;
  roomId: string;
  seatId: string;
  onItemResize: (roomId: string, seatId: string, tileId: string, start: Date, end: Date) => void;
};
