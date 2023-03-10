import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border-top: 2px solid gainsboro;
  border-right: 2px solid gainsboro;
  border-bottom: 2px solid gainsboro;
  border-left: 2px solid black;
  background: transparent;
  animation: ${rotate} 1s linear infinite;
  transform: translateZ(0);
`;

export const Box = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
