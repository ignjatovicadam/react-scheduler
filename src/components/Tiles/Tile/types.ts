import { SchedulerProjectData, ZoomLevel } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: ZoomLevel;
  room: string;
  seat: string;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (roomId: string, seatId: string, tileId: string, start: Date, end: Date) => void;
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
