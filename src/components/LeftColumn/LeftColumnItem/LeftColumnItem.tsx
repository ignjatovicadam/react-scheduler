import { FC } from "react";
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
    <StyledWrapper rows={rows} clickable={true} onClick={onClick}>
      <StyledRoomWrapper bgColor={item.bgColor}>
        <StyledTextWrapper>
          <span>{item.title}</span>
          <Icon
            iconName="chevronDown"
            width="16"
            height="16"
            fill="0"
            className={`rotate-icon ${collapsed ? "up" : ""}`}
          />
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
