import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  OnItemDropProps,
  OnItemResizeProps
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
  onItemDrop: (data: OnItemDropProps) => void;
  onItemResize: (data: OnItemResizeProps) => void;
  onRoomClick: (id: string) => void;
  onCommentClick: (data: SchedulerProjectData) => void;
  openHistory: () => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
