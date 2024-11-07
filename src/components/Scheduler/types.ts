import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  From,
  To
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onItemDrop: (from: From, to: To) => void;
  onItemResize: (roomId: string, seatId: string, tileId: string, newEndDate: Date) => void;
  onRoomClick: (id: string) => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
