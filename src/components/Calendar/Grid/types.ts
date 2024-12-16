import {
  PaginatedSchedulerData,
  SchedulerProjectData,
  OnItemDropProps,
  ZoomLevel,
  OnItemResizeProps
} from "@/types/global";

export type GridProps = {
  zoom: ZoomLevel;
  rows: number;
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemDrop: (data: OnItemDropProps) => void;
  onItemResize: (data: OnItemResizeProps) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
