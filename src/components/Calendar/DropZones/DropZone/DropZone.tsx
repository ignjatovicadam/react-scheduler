import { FC, useCallback, useState } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { getFocusedDate } from "@/utils/getFocusedDate";
import { DropZoneProps } from "./types";
import { StyledDropZone } from "./styles";

const DropZone: FC<DropZoneProps> = ({ topPosition, room, seat, zoom, height, onItemDrop }) => {
  const { startDate } = useCalendar();
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      const item = JSON.parse(event.dataTransfer.getData("application/json"));
      const dropZoneRect = event.currentTarget.getBoundingClientRect();
      const position = event.clientX - dropZoneRect.left;

      const date = getFocusedDate(startDate, position, zoom, item.oldStartDate, item.oldEndDate);

      const model = {
        ...item,
        newRoom: {
          id: room.id,
          name: room.label.title
        },
        newSeat: {
          id: seat.id,
          name: seat.label.title
        },
        newStartDate: date.start,
        newEndDate: date.end
      };

      onItemDrop(model);
      setIsDraggedOver(false);
    },
    [zoom, startDate, onItemDrop, room, seat]
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
