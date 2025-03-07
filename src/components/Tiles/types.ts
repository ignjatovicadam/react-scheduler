import {
  PaginatedSchedulerData,
  SchedulerProjectData,
  ZoomLevel,
  OnItemResizeProps
} from "@/types/global";

export type TilesProps = {
  zoom: ZoomLevel;
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (data: OnItemResizeProps) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
};

export type PlacedTiles = JSX.Element[];
