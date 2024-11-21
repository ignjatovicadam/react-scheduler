import { PaginatedSchedulerData, SchedulerProjectData, ZoomLevel } from "@/types/global";

export type TilesProps = {
  zoom: ZoomLevel;
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (
    roomId: string,
    seatId: string,
    tileId: string,
    start: string,
    end: string
  ) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
};

export type PlacedTiles = JSX.Element[];
