import {
  Day,
  ZoomLevel,
  PaginatedSchedulerRow,
  PaginatedSchedulerRowSeats,
  OnItemResizeProps
} from "@/types/global";

export type useResizeProps = {
  tileWidth: number;
  tilePositionX: number;
  tileStartDate: string | null;
  tileEndDate: string | null;
  tileId: string;
  name: string;
  calendarStartDate: Day;
  zoom: ZoomLevel;
  room: PaginatedSchedulerRow;
  seat: PaginatedSchedulerRowSeats;
  onItemResize: (data: OnItemResizeProps) => void;
};
