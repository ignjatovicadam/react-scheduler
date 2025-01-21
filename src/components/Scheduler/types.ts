import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  OnItemDropProps,
  OnItemResizeProps,
  OnAddSeatProps,
  onRemoveSeatProps
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
  onAddSeat: (data: OnAddSeatProps) => void;
  onRemoveSeat: (data: onRemoveSeatProps) => void;
  openHistory: () => void;
  onBlockedRemoveSeat: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
