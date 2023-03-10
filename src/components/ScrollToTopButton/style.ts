import styled from "styled-components";

interface ButtonProps {
  showButton: boolean;
}

export const ScrollToTopButton = styled.button<ButtonProps>`
  color: goldenrod;
  position: fixed;
  bottom: 40px;
  right: 32px;
  z-index: 10;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  animation: translate 0.5s ease-in-out;
  display: ${({ showButton }) => (showButton ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  @keyframes translate {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
