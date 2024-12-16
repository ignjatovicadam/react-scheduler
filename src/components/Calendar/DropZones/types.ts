import { PaginatedSchedulerData, OnItemDropProps, ZoomLevel } from "@/types/global";

export type DropZonesProps = {
  data: PaginatedSchedulerData;
  rowsPerItem: number[];
  zoom: ZoomLevel;
  onItemDrop: (data: OnItemDropProps) => void;
};
