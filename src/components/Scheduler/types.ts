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
  themeMode: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onItemDrop: (from: From, to: To) => void;
  onItemResize: (
    roomId: string,
    seatId: string,
    tileId: string,
    start: string,
    end: string
  ) => void;
  onRoomClick: (id: string) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
