import { FC } from "react";
import Icon from "../Icon";
import PaginationButton from "../PaginationButton/PaginationButton";
import { StyledLeftColumnHeader, StyledWrapper } from "./styles";
import { LeftColumnProps } from "./types";
import LeftColumnItem from "./LeftColumnItem/LeftColumnItem";

const LeftColumn: FC<LeftColumnProps> = ({
  data,
  rows,
  onLoadNext,
  onLoadPrevious,
  pageNum,
  pagesAmount,
  onItemClick,
  onRoomClick,
  onAddSeat,
  onRemoveSeat,
  onBlockedRemoveSeat
}) => {
  return (
    <StyledWrapper>
      <StyledLeftColumnHeader>
        <div className="classroom__edit">
          <span>CLASSROOMS</span>
        </div>
        <PaginationButton
          intent="previous"
          isVisible={pageNum !== 0}
          onClick={onLoadPrevious}
          icon={<Icon iconName="arrowUp" width="16" height="16" />}
          pageNum={pageNum}
          pagesAmount={pagesAmount}
        />
      </StyledLeftColumnHeader>
      {data.map((item, index) => (
        <LeftColumnItem
          id={item.id}
          item={item.label}
          key={item.id}
          collapsed={item.collapsed}
          rows={rows[index]}
          seats={item.seats}
          onItemClick={onItemClick}
          onRoomClick={onRoomClick}
          onAddSeat={onAddSeat}
          onRemoveSeat={onRemoveSeat}
          onBlockedRemoveSeat={onBlockedRemoveSeat}
        />
      ))}
      <PaginationButton
        intent="next"
        isVisible={pageNum !== pagesAmount - 1}
        onClick={onLoadNext}
        icon={<Icon iconName="arrowDown" width="16" height="16" />}
        pageNum={pageNum}
        pagesAmount={pagesAmount}
      />
    </StyledWrapper>
  );
};

export default LeftColumn;
