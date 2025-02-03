import { Day } from "@/types/global";
import { Theme } from "@/styles";
import { drawDaysOnBottom } from "./drawRows/drawDaysOnBottom";
import { drawMonthsInMiddle } from "./drawRows/drawMonthsInMiddle";
import { drawMonthsOnTop } from "./drawRows/drawMonthsOnTop";
import { drawWeeksInMiddle } from "./drawRows/drawWeeksInMiddle";
import { drawWeeksOnBottom } from "./drawRows/drawWeeksOnBottom";
import { drawYearsOnTop } from "./drawRows/drawYearsOnTop";

export const drawHeader = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  cols: number,
  startDate: Day,
  weekLabel: string,
  dayOfYear: number,
  theme: Theme
) => {
  switch (zoom) {
    case 0:
      drawYearsOnTop(ctx, startDate, dayOfYear, theme, true);
      drawMonthsInMiddle(ctx, cols, startDate, theme, true);
      break;
    case 1:
      drawYearsOnTop(ctx, startDate, dayOfYear, theme, false);
      drawMonthsInMiddle(ctx, cols, startDate, theme, false);
      drawWeeksOnBottom(ctx, cols, startDate, weekLabel, theme, false);
      break;
    case 2:
      drawMonthsOnTop(ctx, startDate, theme);
      drawWeeksInMiddle(ctx, startDate, weekLabel, theme);
      drawDaysOnBottom(ctx, cols, startDate, theme);
      break;
  }
};
