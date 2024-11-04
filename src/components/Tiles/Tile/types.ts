import { SchedulerProjectData, ZoomLevel } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: ZoomLevel;
  room: string;
  seat: string;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (roomId: string, seatId: string, tileId: string, newEndDate: Date) => void;
};

export type StyledTextProps = {
  bold?: boolean;
};
