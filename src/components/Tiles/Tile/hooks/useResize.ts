import { useRef, useEffect } from "react";
import { singleDayWidth } from "@/constants";
import { getEndDate } from "../utils/getEndDate";
import { useResizeProps } from "./types";

export const useResize = ({
  initialWidth,
  startDate,
  x,
  zoom,
  room,
  seat,
  id,
  onItemResize
}: useResizeProps) => {
  const tile = useRef<HTMLButtonElement>(null);
  const initialXRef = useRef(0);
  const currentWidth = useRef(0);

  const onMouseMove = (e: MouseEvent) => {
    const newWidth = Math.max(initialWidth + e.clientX - initialXRef.current, singleDayWidth);
    currentWidth.current = newWidth;
    if (tile.current) tile.current.style.width = `${newWidth}px`;
  };

  const onMouseUp = () => {
    const endDate = getEndDate({ startDate, position: x + currentWidth.current, zoom });
    onItemResize(room, seat, id, endDate);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  const onResize = (event: React.MouseEvent) => {
    event.preventDefault();
    initialXRef.current = event.clientX;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return { tile, onResize };
};
