import {
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  OnItemDropProps,
  OnItemResizeProps,
  OnAddSeatProps,
  onRemoveSeatProps
} from "@/types/global";

export type CalendarProps = {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onItemDrop: (data: OnItemDropProps) => void;
  onItemResize: (data: OnItemResizeProps) => void;
  onRoomClick: (id: string) => void;
  toggleTheme?: () => void;
  onCommentClick: (data: SchedulerProjectData) => void;
  onAddSeat: (data: OnAddSeatProps) => void;
  onRemoveSeat: (data: onRemoveSeatProps) => void;
  openHistory: () => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
