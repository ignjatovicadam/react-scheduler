import {
  PaginatedSchedulerData,
  SchedulerItemClickData,
  OnAddSeatProps,
  onRemoveSeatProps
} from "@/types/global";

export type LeftColumnProps = {
  data: PaginatedSchedulerData;
  rows: number[];
  pageNum: number;
  pagesAmount: number;
  onLoadNext: () => void;
  onLoadPrevious: () => void;
  searchInputValue: string;
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onRoomClick: (id: string) => void;
  onAddSeat: (data: OnAddSeatProps) => void;
  onRemoveSeat: (data: onRemoveSeatProps) => void;
  onBlockedRemoveSeat: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};
