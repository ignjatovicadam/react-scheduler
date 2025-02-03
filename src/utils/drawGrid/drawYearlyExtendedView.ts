import dayjs from "dayjs";
import { boxHeight, singleDayWidthExtended, weekWidthExtended } from "@/constants";
import { Day } from "@/types/global";
import { Theme } from "@/styles";
import { drawDashedLine } from "../drawDashedLine";
import { getDaysInMonths } from "../dates";
import { drawCell } from "./drawCell";

export const drawYearlyExtendedView = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
  startDate: Day,
  theme: Theme
) => {
  let xPos = 0;
  let startPos = -(startDate.dayOfMonth - 1) * singleDayWidthExtended;

  for (let i = 0; i <= cols; i++) {
    const week = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(
      i,
      "weeks"
    );

    const isCurrWeek = week.isSame(dayjs(), "week");

    for (let y = 0; y < rows; y++) {
      drawCell(ctx, xPos, y * boxHeight, weekWidthExtended, true, isCurrWeek, theme);
    }

    xPos += weekWidthExtended;
  }

  for (let i = 0; i < cols; i++) {
    const width = getDaysInMonths(startDate, i) * singleDayWidthExtended;
    drawDashedLine(ctx, startPos, rows * boxHeight, theme);
    startPos += width;
  }
};
