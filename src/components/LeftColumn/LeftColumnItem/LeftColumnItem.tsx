import { FC } from "react";
import { IconChevronDown, IconTrash } from "@tabler/icons-react";
import {
  StyledText,
  StyledTextWrapper,
  StyledSeatWrapper,
  StyledRoomWrapper,
  StyledWrapper,
  StyledPlusButton,
  StyledIconContainer
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  seats,
  collapsed,
  onRoomClick,
  onAddSeat,
  onRemoveSeat,
  onBlockedRemoveSeat
}) => {
  const onClick = () => onRoomClick(id);

  const handleRemoveSeat = (
    seat: string,
    blocked: boolean,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (blocked) {
      onBlockedRemoveSeat(e);
      return;
    }

    onRemoveSeat({
      room: { id: id },
      seat: { id: seat }
    });
  };

  return (
    <StyledWrapper rows={rows} clickable={true} className="scheduler-room">
      <StyledRoomWrapper bgColor={item.bgColor} onClick={onClick}>
        <StyledTextWrapper>
          <span>{item.title}</span>
          <IconChevronDown size={20} className={`rotate-icon ${collapsed ? "up" : ""}`} />
        </StyledTextWrapper>
      </StyledRoomWrapper>
      {seats.map((seat, i) => {
        if (collapsed) return null;
        return (
          <StyledSeatWrapper rows={seat.data.length} key={i} className="scheduler-seat">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
              <span
                style={{
                  height: "10px",
                  width: "10px",
                  background:
                    seat.data.length === 1 && seat.data[0].length === 0
                      ? "green"
                      : seat.data.length === 1
                      ? "white"
                      : "red",
                  display: "block",
                  border: "0.5px solid black"
                }}></span>
            </div>
            {i === seats.length - 1 && (
              <StyledPlusButton
                className="button-add-new-seat"
                onClick={() =>
                  onAddSeat({
                    room: {
                      name: item.title,
                      id: id
                    },
                    length: seats.length
                  })
                }>
                Add a seat
              </StyledPlusButton>
            )}
            <StyledText>{i + 1}</StyledText>
            <StyledIconContainer
              onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                handleRemoveSeat(seat.id, seat.data[0].length > 0, event);
              }}>
              <IconTrash size={15} />
            </StyledIconContainer>
          </StyledSeatWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default LeftColumnItem;
