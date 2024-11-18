import { FC } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import {
  StyledText,
  StyledTextWrapper,
  StyledSeatWrapper,
  StyledRoomWrapper,
  StyledWrapper
} from "./styles";
import { LeftColumnItemProps } from "./types";

const LeftColumnItem: FC<LeftColumnItemProps> = ({
  id,
  item,
  rows,
  seats,
  collapsed,
  onItemClick,
  onRoomClick
}) => {
  const onClick = () => onRoomClick(id);

  return (
    <StyledWrapper rows={rows} clickable={typeof onItemClick === "function"} onClick={onClick}>
      <StyledRoomWrapper bgColor={item.bgColor}>
        <StyledTextWrapper>
          <span>{item.title}</span>
          <IconChevronDown size="18" className={`rotate-icon ${collapsed ? "up" : ""}`} />
        </StyledTextWrapper>
      </StyledRoomWrapper>
      {seats.map((seat, i) => {
        if (collapsed) return null;
        return (
          <StyledSeatWrapper rows={seat.data.length} key={i}>
            <StyledText>{seat.label.title}</StyledText>
          </StyledSeatWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default LeftColumnItem;
