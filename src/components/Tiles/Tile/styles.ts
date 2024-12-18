import styled from "styled-components";
import { tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps } from "./types";

export const StyledTileWrapper = styled.button<{ ref: React.RefObject<HTMLButtonElement> }>`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  z-index: 9;
  outline: none;
  border: none;
  border-radius: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
`;

export const StyledInnerWrapper = styled.div`
  position: relative;
`;

export const StyledResizeButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  width: 30px;
  cursor: ew-resize;
  z-index: 10;

  &.left {
    left: 0px;
  }

  &.right {
    right: 0px;
  }
`;

export const StyledTextWrapper = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
  padding: 0px 35px;
`;

export const StyledText = styled.p<StyledTextProps>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  &::after {
    content: "|";
    margin: 0 3px;
  }
`;

export const StyledCommentButton = styled.div`
  ${marginPaddingReset}
  ${truncate}
  background: none;
  border: none;
  font-size: 10px;
  color: white;
  cursor: pointer;
  padding: 0;
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;
