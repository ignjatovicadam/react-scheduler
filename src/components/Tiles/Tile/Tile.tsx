import { DragEvent, FC } from "react";
import { useTheme } from "styled-components";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { Icon } from "@/components";
import {
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper,
  StyledInnerWrapper,
  StyledResizeButton,
  StyledCommentButton
} from "./styles";
import { TileProps } from "./types";
import { useResize } from "./hooks/useResize";

const Tile: FC<TileProps> = ({
  row,
  data,
  zoom,
  room,
  seat,
  onTileClick,
  onItemResize,
  onCommentClick
}) => {
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
    tileWidth: width,
    tilePositionX: x,
    tileStartDate: data.startDate,
    tileEndDate: data.endDate,
    tileId: data.id,
    name: data.title,
    calendarStartDate: startDate,
    zoom,
    room,
    seat,
    onItemResize
  });

  const onDrag = (event: DragEvent<HTMLButtonElement>) => {
    const m = {
      id: data.id,
      name: data.title,
      oldSeat: {
        id: seat.id,
        name: seat.label.title
      },
      oldRoom: {
        id: room.id,
        name: room.label.title
      },
      oldStartDate: data.startDate,
      oldEndDate: data.endDate
    };
    event.dataTransfer.setData("application/json", JSON.stringify(m));
  };

  const onCommentButtonClick = () => {
    onCommentClick(data);
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
      <StyledResizeButton className="left" onMouseDown={(e) => onResize(e, "left")}>
        <Icon iconName="arrowLeft" height="15" fill={"white"} />
      </StyledResizeButton>
      <StyledInnerWrapper>
        <StyledTextWrapper>
          <StyledText bold>{data.title}</StyledText>
          {data.dateOfBirth && <StyledText>{data.dateOfBirth}</StyledText>}
          {data.startDate && <StyledText>{data.startDate}</StyledText>}
          {data.endDate && <StyledText>{data.endDate}</StyledText>}
          <StyledCommentButton onClick={onCommentButtonClick}>Comments</StyledCommentButton>
        </StyledTextWrapper>
      </StyledInnerWrapper>
      <StyledResizeButton className="right" onMouseDown={(e) => onResize(e, "right")}>
        <Icon iconName="arrowRight" height="15" fill={"white"} />
      </StyledResizeButton>
    </StyledTileWrapper>
  );
};

export default Tile;
