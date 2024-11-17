import { PaginatedSchedulerData, SchedulerProjectData, ZoomLevel } from "@/types/global";

export type TilesProps = {
  zoom: ZoomLevel;
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemResize: (roomId: string, seatId: string, tileId: string, start: Date, end: Date) => void;
};

export type PlacedTiles = JSX.Element[];
