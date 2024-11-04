import { FC, useCallback, useState } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { getFocusedDate } from "@/utils/getFocusedDate";
import { DropZoneProps } from "./types";
import { StyledDropZone } from "./styles";

const DropZone: FC<DropZoneProps> = ({ topPosition, roomId, seatId, zoom, height, onItemDrop }) => {
  const { startDate } = useCalendar();
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      const item = JSON.parse(event.dataTransfer.getData("application/json"));
      const dropZoneRect = event.currentTarget.getBoundingClientRect();
      const position = event.clientX - dropZoneRect.left;

      const date = getFocusedDate(startDate, position, zoom, item.fromStart, item.fromEnd);

      onItemDrop(item, {
        toRoom: roomId,
        toSeat: seatId,
        id: item.id,
        start: date.start,
        end: date.end
      });

      setIsDraggedOver(false);
    },
    [zoom, startDate, onItemDrop, roomId, seatId]
  );

  const handleDragEnter = () => setIsDraggedOver(true);
  const handleDragLeave = () => setIsDraggedOver(false);
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <StyledDropZone
      isDraggedOver={isDraggedOver}
      height={height}
      topPosition={topPosition}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    />
  );
};

export default DropZone;
