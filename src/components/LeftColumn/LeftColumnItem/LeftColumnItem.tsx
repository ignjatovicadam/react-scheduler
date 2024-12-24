import { FC } from "react";
import { IconChevronDown, IconPlus } from "@tabler/icons-react";
import {
  StyledText,
  StyledTextWrapper,
  StyledSeatWrapper,
  StyledRoomWrapper,
  StyledWrapper,
  StyledPlusButton
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  seats,
  collapsed,
  onRoomClick,
  onAddSeat
}) => {
  const onClick = () => onRoomClick(id);

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
            <span
              style={{
                height: "10px",
                width: "10px",
                background: item.bgColor,
                display: "block"
              }}></span>
            <StyledText>{seat.label.title}</StyledText>
            {i === seats.length - 1 && (
              <StyledPlusButton
                onClick={() =>
                  onAddSeat({
                    room: {
                      name: item.title,
                      id: id
                    },
                    length: seats.length
                  })
                }>
                <IconPlus size={15} fill="#122C4F" />
              </StyledPlusButton>
            )}
          </StyledSeatWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default LeftColumnItem;
