import styled from "styled-components";
import { boxHeight } from "@/constants";

export const StyledDropZone = styled.div<{
  topPosition: number;
  isDraggedOver: boolean;
  height: number;
}>`
  position: absolute;
  z-index: 8;
  width: 100%;
  height: ${({ height }) => height * boxHeight}px;
  opacity: ${({ isDraggedOver }) => (isDraggedOver ? 0.3 : 0)};
  background: rgb(250, 164, 25);
  top: ${({ topPosition }) => topPosition * boxHeight}px;
  transition: opacity 0.2s ease, background 0.2s ease;
`;
