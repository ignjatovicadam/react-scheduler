import { PaginatedSchedulerData, SchedulerProjectData, From, To, ZoomLevel } from "@/types/global";

export type GridProps = {
  zoom: ZoomLevel;
  rows: number;
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemDrop: (from: From, to: To) => void;
  onItemResize: (roomId: string, seatId: string, tileId: string, start: Date, end: Date) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
