import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { drawGrid } from "@/utils/drawGrid/drawGrid";
import { boxHeight, canvasWrapperId, leftColumnWidth, outsideWrapperId } from "@/constants";
import { Loader, Tiles } from "@/components";
import { useCalendar } from "@/context/CalendarProvider";
import { resizeCanvas } from "@/utils/resizeCanvas";
import { getCanvasWidth } from "@/utils/getCanvasWidth";
import { GridProps } from "./types";
import { StyledCanvas, StyledInnerWrapper, StyledSpan, StyledWrapper } from "./styles";
import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { zoom, rows, data: initialData, onTileClick },
  ref
) {
  const [data, setData] = useState<PaginatedSchedulerData>(initialData);
  const { handleScrollNext, handleScrollPrev, date, isLoading, cols, startDate } = useCalendar();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const refRight = useRef<HTMLSpanElement>(null);
  const refLeft = useRef<HTMLSpanElement>(null);

  const theme = useTheme();

  const handleResize = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const width = getCanvasWidth();
      const height = rows * boxHeight + 1;
      resizeCanvas(ctx, width, height);
      drawGrid(ctx, zoom, rows, cols, startDate, theme);
    },
    [cols, startDate, rows, zoom, theme]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const onResize = () => handleResize(ctx);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [handleResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.letterSpacing = "1px";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    handleResize(ctx);
  }, [date, rows, zoom, handleResize]);

  useEffect(() => {
    if (!refRight.current) return;
    const observerRight = new IntersectionObserver(
      (e) => (e[0].isIntersecting ? handleScrollNext() : null),
      { root: document.getElementById(outsideWrapperId) }
    );
    observerRight.observe(refRight.current);

    return () => observerRight.disconnect();
  }, [handleScrollNext]);

  useEffect(() => {
    if (!refLeft.current) return;
    const observerLeft = new IntersectionObserver(
      (e) => (e[0].isIntersecting ? handleScrollPrev() : null),
      {
        root: document.getElementById(outsideWrapperId),
        rootMargin: `0px 0px 0px -${leftColumnWidth}px`
      }
    );
    observerLeft.observe(refLeft.current);

    return () => observerLeft.disconnect();
  }, [handleScrollPrev]);

  const handleTileDrop = useCallback((draggedTile: SchedulerProjectData, targetTile: SchedulerProjectData) => {
    setData((prevData) => {
      const newData = [...prevData];
      
      // Find the person and row indices for both tiles
      let draggedPersonIndex, draggedRowIndex, targetPersonIndex, targetRowIndex;
      
      newData.forEach((person, personIndex) => {
        person.data.forEach((row, rowIndex) => {
          const draggedIndex = row.findIndex(project => project.id === draggedTile.id);
          const targetIndex = row.findIndex(project => project.id === targetTile.id);
          
          if (draggedIndex !== -1) {
            draggedPersonIndex = personIndex;
            draggedRowIndex = rowIndex;
          }
          if (targetIndex !== -1) {
            targetPersonIndex = personIndex;
            targetRowIndex = rowIndex;
          }
        });
      });

      if (draggedPersonIndex !== undefined && draggedRowIndex !== undefined &&
          targetPersonIndex !== undefined && targetRowIndex !== undefined) {
        // Remove the dragged tile from its original position
        const [removedTile] = newData[draggedPersonIndex].data[draggedRowIndex].splice(
          newData[draggedPersonIndex].data[draggedRowIndex].findIndex(project => project.id === draggedTile.id),
          1
        );

        // Insert the dragged tile into the new position
        newData[targetPersonIndex].data[targetRowIndex].push(removedTile);

        // Sort the tiles in the target row by start date
        newData[targetPersonIndex].data[targetRowIndex].sort((a, b) => 
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      }

      return newData;
    });
  }, []);

  return (
    <StyledWrapper id={canvasWrapperId}>
      <StyledInnerWrapper ref={ref}>
        <StyledSpan position="left" ref={refLeft} />
        <Loader isLoading={isLoading} position="left" />
        <StyledCanvas ref={canvasRef} />
        <Tiles data={data} zoom={zoom} onTileClick={onTileClick} onTileDrop={handleTileDrop} />
        <StyledSpan ref={refRight} position="right" />
        <Loader isLoading={isLoading} position="right" />
      </StyledInnerWrapper>
    </StyledWrapper>
  );
});

export default Grid;
