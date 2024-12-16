import {
  OnItemDropProps,
  ZoomLevel,
  PaginatedSchedulerRow,
  PaginatedSchedulerRowSeats
} from "@/types/global";

export type DropZoneProps = {
  topPosition: number;
  room: PaginatedSchedulerRow;
  seat: PaginatedSchedulerRowSeats;
  zoom: ZoomLevel;
  height: number;
  onItemDrop: (data: OnItemDropProps) => void;
};
