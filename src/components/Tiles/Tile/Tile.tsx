import { DragEvent, FC } from "react";
import { useTheme } from "styled-components";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import {
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper,
  StyledInnerWrapper,
  StyledResizeButton
} from "./styles";
import { TileProps } from "./types";
import { useResize } from "./hooks/useResize";

const Tile: FC<TileProps> = ({ row, data, zoom, room, seat, onTileClick, onItemResize }) => {
  const { date, startDate } = useCalendar();
  const { colors } = useTheme();
  const datesRange = getDatesRange(date, zoom);

  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  const { tile, onResize } = useResize({
    initialWidth: width,
    startDate,
    x,
    zoom,
    room,
    seat,
    id: data.id,
    onItemResize
  });

  const onDrag = (event: DragEvent<HTMLButtonElement>) => {
    const m = {
      id: data.id,
      fromRoom: room,
      fromSeat: seat,
      fromStart: data.startDate,
      fromEnd: data.endDate
    };
    event.dataTransfer.setData("application/json", JSON.stringify(m));
  };

  return (
    <StyledTileWrapper
      draggable={true}
      className="draggable"
      ref={tile}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: `${data.bgColor ?? colors.defaultTile}`,
        width: `${width}px`,
        color: getTileTextColor(data.bgColor ?? "")
      }}
      onDragStart={onDrag}
      onClick={() => onTileClick?.(data)}>
      <StyledInnerWrapper>
        <StyledResizeButton onMouseDown={onResize} />
        <StyledTextWrapper>
          <StyledStickyWrapper>
            <StyledText bold>{data.title}</StyledText>
          </StyledStickyWrapper>
        </StyledTextWrapper>
      </StyledInnerWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
