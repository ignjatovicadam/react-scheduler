import { FC } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import Icon from "../../Icon";
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
  onRoomClick
}) => {
  const onClick = () => onRoomClick(id);

  return (
    <StyledWrapper rows={rows} clickable={true} onClick={onClick} className="scheduler-room">
      <StyledRoomWrapper bgColor={item.bgColor}>
        <StyledTextWrapper>
          <span>{item.title}</span>
          <IconChevronDown size={20} className={`rotate-icon ${collapsed ? "up" : ""}`} />
        </StyledTextWrapper>
      </StyledRoomWrapper>
      {seats.map((seat, i) => {
        if (collapsed) return null;
        return (
          <StyledSeatWrapper rows={seat.data.length} key={i} className="scheduler-seat">
            <StyledText>{seat.label.title}</StyledText>
          </StyledSeatWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default LeftColumnItem;
