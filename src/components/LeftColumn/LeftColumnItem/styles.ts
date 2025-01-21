import styled from "styled-components";
import { boxHeight } from "@/constants";
import {
  StyledLeftColumnItemWrapperProps,
  StyledTextProps,
  StyledSeatWrapperProps,
  StyledRoomWrapperProps,
  StyledIconWrapperProps
} from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  position: relative;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
`;

export const StyledRoomWrapper = styled.div<StyledRoomWrapperProps>`
  min-height: ${boxHeight}px;
  height: ${boxHeight}px;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: ${({ bgColor }) => bgColor};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledSeatWrapper = styled.div<StyledSeatWrapperProps>`
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 0.5rem 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
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
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const StyledPlusButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  padding: 2px 3px;
  font-size: 11px;
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;

export const StyledIconContainer = styled.div<StyledIconWrapperProps>`
  height: 30px;
  width: 30px;
  background: white;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease;

  &:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
`;
