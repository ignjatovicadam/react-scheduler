import styled from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";
import { marginPaddingReset, truncate } from "@/styles";
import { StyledTextProps } from "./types";

export const StyledTileWrapper = styled.button<{ ref: React.RefObject<HTMLButtonElement> }>`
  ${marginPaddingReset}
  height: ${tileHeight}px;
  position: absolute;
  z-index: 9;
  outline: none;
  border: none;
  width: 563px;
  border-radius: 0px 20px 20px 0px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`;

export const StyledInnerWrapper = styled.div`
  position: relative;
`;

export const StyledResizeButton = styled.div`
  position: absolute;
  bottom: 8px;
  right: -3px;
  background: red;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  cursor: se-resize;
`;

export const StyledTextWrapper = styled.div`
  position: relative;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;

export const StyledText = styled.p<StyledTextProps>`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;
