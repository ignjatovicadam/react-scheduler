import { prefixId } from "./styles";

export const dayWidth = 50;
export const headerMonthHeight = 24;
export const headerWeekHeight = 24;
export const headerDayHeight = 40;
export const headerHeight = headerDayHeight + headerWeekHeight + headerMonthHeight;
export const weekWidth = 46;
export const boxHeight = 45;
export const leftColumnWidth = 150;
export const singleDayWidth = 6.57;
export const zoom2ColumnWidth = 50;
export const zoom2HeaderTopRowHeight = 24;
export const zoom2HeaderMiddleRowHeight = 16;
export const zoom2HeaderBottomRowHeight = 40;
export const zoom2HeaderHeight =
  zoom2HeaderTopRowHeight + zoom2HeaderMiddleRowHeight + zoom2HeaderBottomRowHeight;
export const zoom2ButtonJump = 1;
export const weeksInYear = 52;
export const navHeight = 44;
export const fonts = {
  topRow: "600 14px inherit",
  middleRow: "400 10px inherit",
  bottomRow: {
    name: "600 12px inherit",
    number: "600 9px inherit"
  }
};
export const screenWidthMultiplier = 3;
export const dayNameYoffset = 1.6;
export const dayNumYOffset = 4.5;
export const monthsInYear = 12;
export const hoursInDay = 24;
export const canvasHeaderWrapperId = "reactSchedulerCanvasHeaderWrapper";
export const canvasWrapperId = "reactSchedulerCanvasWrapper";
export const outsideWrapperId = prefixId;
export const tileYOffset = 4;
export const tileHeight = 20;
export const formFieldsIds = {
  peopleCount: "peopleCount",
  projectsPerYear: "projectsPerYear",
  yearsCovered: "yearsCovered",
  startDate: "startDate",
  maxRecordsPerPage: "maxRecordsPerPage",
  isFullscreen: "isFullscreen"
};
export const businessDays = 5;
export const maxHoursPerWeek = 40;
export const maxHoursPerDay = 8;
export const topRowTextYPos = headerMonthHeight / 2 + 2;
export const middleRowTextYPos = headerWeekHeight / 2 + headerMonthHeight + 1;
export const buttonWeeksJump = 2;
export const minutesInHour = 60;
