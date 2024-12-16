import { useRef, useEffect } from "react";
import { singleDayWidth, weekWidth } from "@/constants";
import { getCalendarDate } from "../utils/getCalendarDate";
import { useResizeProps } from "./types";

export const useResize = ({
  tileWidth,
  tilePositionX,
  tileStartDate,
  tileEndDate,
  tileId,
  name,
  calendarStartDate,
  zoom,
  room,
  seat,
  onItemResize
}: useResizeProps) => {
  const tile = useRef<HTMLButtonElement>(null);
  const startClientPositionX = useRef(0);
  const currentTileWidth = useRef(0);
  const currentResizeDirection = useRef("right");
  const currentTileLeftProp = useRef(tilePositionX);

  const onResize = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    currentResizeDirection.current = direction;
    startClientPositionX.current = e.clientX;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = () => {
    if (currentResizeDirection.current === "right") {
      const endDate = getCalendarDate({
        calendarStartDate,
        position: tilePositionX + currentTileWidth.current,
        zoom
      });

      const model = {
        id: tileId,
        name: name,
        seat: {
          id: seat.id,
          name: seat.label.title
        },
        room: {
          id: room.id,
          name: room.label.title
        },
        oldStartDate: tileStartDate,
        oldEndDate: tileEndDate,
        newStartDate: null,
        newEndDate: endDate
      };

      onItemResize(model);
    }

    if (currentResizeDirection.current === "left") {
      const startDate = getCalendarDate({
        calendarStartDate,
        position: currentTileLeftProp.current,
        zoom
      });

      const model = {
        id: tileId,
        name: name,
        seat: {
          id: seat.id,
          name: seat.label.title
        },
        room: {
          id: room.id,
          name: room.label.title
        },
        oldStartDate: tileStartDate,
        oldEndDate: tileEndDate,
        newStartDate: startDate,
        newEndDate: null
      };

      onItemResize(model);
    }

    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (currentResizeDirection.current === "right") {
      resizeRight(e);
      if (tile.current) {
        tile.current.style.width = `${currentTileWidth.current}px`;
      }
    }

    if (currentResizeDirection.current === "left") {
      resizeLeft(e);
      if (tile.current) {
        tile.current.style.width = `${currentTileWidth.current}px`;
        tile.current.style.left = `${currentTileLeftProp.current}px`;
      }
    }
  };

  const resizeRight = (e: MouseEvent) => {
    const width = Math.max(
      tileWidth + e.clientX - startClientPositionX.current,
      zoom === 0 ? weekWidth : singleDayWidth
    );
    currentTileWidth.current = width;
  };

  const resizeLeft = (e: MouseEvent) => {
    const delta = startClientPositionX.current - e.clientX;
    currentTileLeftProp.current = tilePositionX - delta;
    currentTileWidth.current = Math.max(tileWidth + delta, zoom === 0 ? weekWidth : singleDayWidth);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return {
    tile,
    onResize
  };
};
