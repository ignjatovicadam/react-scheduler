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
  onRemoveSeat
}) => {
  const onClick = () => onRoomClick(id);

  const handleRemoveSeat = (seat: string, blocked: boolean) => {
    if (blocked) return;
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
                  background: seat.data[0].length > 0 ? "red" : "green",
                  display: "block"
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
            <StyledText>{seat.label.title}</StyledText>
            <StyledIconContainer>
              <IconTrash
                size={15}
                onClick={() => handleRemoveSeat(seat.id, seat.data[0].length > 0)}
              />
            </StyledIconContainer>
          </StyledSeatWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default LeftColumnItem;
