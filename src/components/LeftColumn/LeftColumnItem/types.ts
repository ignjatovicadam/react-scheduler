import {
  SchedulerItemClickData,
  SchedulerRowLabel,
  PaginatedSchedulerRowSeats,
  OnAddSeatProps
} from "@/types/global";

export type LeftColumnItemProps = {
  id: string;
  item: SchedulerRowLabel;
  rows: number;
  seats: PaginatedSchedulerRowSeats[];
  collapsed: boolean;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onRoomClick: (id: string) => void;
  onAddSeat: (data: OnAddSeatProps) => void;
};

export type StyledTextProps = {
  isMain?: boolean;
};

export type StyledLeftColumnItemWrapperProps = {
  rows: number;
  clickable: boolean;
};

export type StyledRoomWrapperProps = {
  bgColor?: string;
};

export type StyledSeatWrapperProps = {
  rows: number;
};
