import { PaginatedSchedulerData, SchedulerItemClickData, OnAddSeatProps } from "@/types/global";

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
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};
