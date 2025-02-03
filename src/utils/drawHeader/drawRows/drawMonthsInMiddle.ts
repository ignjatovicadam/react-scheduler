import dayjs from "dayjs";
import {
  fonts,
  headerMonthHeight,
  headerWeekHeight,
  middleRowTextYPos,
  monthsInYear,
  singleDayWidth,
  singleDayWidthExtended
} from "@/constants";
import { Day } from "@/types/global";
import { getDaysInMonths } from "@/utils/dates";
import { Theme } from "@/styles";
import { drawRow } from "../../drawRow";

export const drawMonthsInMiddle = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day,
  theme: Theme,
  isExtended: boolean
) => {
  const dayWith = isExtended ? singleDayWidthExtended : singleDayWidth;
  let xPos = -(startDate.dayOfMonth - 1) * dayWith;
  const yPos = headerMonthHeight;
  const monthIndex = startDate.month;
  let index = monthIndex;

  for (let i = 0; i < cols; i++) {
    if (index >= monthsInYear) index = 0;
    const width = getDaysInMonths(startDate, i) * dayWith;

    drawRow(
      {
        ctx,
        x: xPos,
        y: yPos,
        width,
        height: 64,
        textYPos: middleRowTextYPos,
        label: dayjs().month(index).format("MMMM").toUpperCase(),
        font: fonts.bottomRow.number
      },
      theme
    );
    xPos += width;
    index++;
  }
};
