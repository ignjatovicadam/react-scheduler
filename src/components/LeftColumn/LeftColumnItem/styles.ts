import styled from "styled-components";
import { boxHeight } from "@/constants";
import {
  StyledLeftColumnItemWrapperProps,
  StyledTextProps,
  StyledSeatWrapperProps,
  StyledRoomWrapperProps
} from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  flex-direction: column;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  transition: height 0.6s ease-in-out;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
`;

export const StyledRoomWrapper = styled.div<StyledRoomWrapperProps>`
  min-height: ${boxHeight}px;
  height: ${boxHeight}px;
  width: 100%;
  padding: 0.813rem 0 0 0.5rem;
  background-color: ${({ bgColor }) => bgColor};
`;

export const StyledSeatWrapper = styled.div<StyledSeatWrapperProps>`
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.813rem 0 0 1rem;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  text-transform: uppercase;

  span {
    width: 110px;
    max-width: 110px;
    white-space: nowrap;
  }

  .rotate-icon {
    transition: transform 0.3s ease;
  }

  .rotate-icon.up {
    transform: rotate(180deg);
  }
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain }) => (isMain ? 0.6 + "rem" : 0.625 + "rem")};
  letter-spacing: ${({ isMain }) => (isMain ? 1 + "px" : 0.5 + "px")};
  line-height: ${({ isMain }) => (isMain ? 1.125 + "rem" : 0.75 + "rem")};
  color: ${({ isMain, theme }) => (isMain ? theme.colors.textPrimary : theme.colors.placeholder)};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;
