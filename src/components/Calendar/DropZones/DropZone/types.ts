import { From, To, ZoomLevel } from "@/types/global";

export type DropZoneProps = {
  topPosition: number;
  roomId: string;
  seatId: string;
  zoom: ZoomLevel;
  height: number;
  onItemDrop: (from: From, to: To) => void;
};
