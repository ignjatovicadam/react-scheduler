import { Day, ZoomLevel } from "@/types/global";

export type useResizeProps = {
  initialWidth: number;
  startDate: Day;
  x: number;
  zoom: ZoomLevel;
  room: string;
  seat: string;
  id: string;
  onItemResize: (roomId: string, seatId: string, tileId: string, newEndDate: Date) => void;
};
