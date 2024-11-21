import { Day, ZoomLevel } from "@/types/global";

export type useResizeProps = {
  tileWidth: number;
  tilePositionX: number;
  tileStartDate: string;
  tileEndDate: string;
  tileId: string;
  calendarStartDate: Day;
  zoom: ZoomLevel;
  roomId: string;
  seatId: string;
  onItemResize: (
    roomId: string,
    seatId: string,
    tileId: string,
    start: string,
    end: string
  ) => void;
};
