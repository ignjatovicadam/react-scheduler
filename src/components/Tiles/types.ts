import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type TilesProps = {
  zoom: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  onTileDrop?: (draggedTile: SchedulerProjectData, targetTile: SchedulerProjectData) => void;
};

export type PlacedTiles = JSX.Element[];
