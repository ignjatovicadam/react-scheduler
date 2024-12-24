import {
  SchedulerProjectData,
  ZoomLevel,
  PaginatedSchedulerRow,
  PaginatedSchedulerRowSeats,
  OnItemResizeProps
} from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: ZoomLevel;
  room: PaginatedSchedulerRow;
  seat: PaginatedSchedulerRowSeats;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (data: OnItemResizeProps) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: () => void;
};

export type StyledTextProps = {
  bold?: boolean;
};

export interface StyledTileWrapperProps {
  ref: React.RefObject<HTMLButtonElement>;
  left: number;
  top: number;
  backgroundColor: string;
  width: number;
  color: string;
}
