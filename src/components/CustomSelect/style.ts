import styled, { css } from "styled-components";

interface DropdownBoxProps {
  isVisible: boolean;
}

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

export const SelectButtonLabel = styled.button`
  width: 8rem;
  padding: 0.375rem 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownBox = styled.div<DropdownBoxProps>`
  position: absolute;
  top: 4;
  left: 0;
  z-index: 2;
  max-height: 40vmax;
  min-width: 8rem;
  padding: 0.5rem;
  background: #000;
  border-radius: 0.5rem;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  transition: max-height 0.2s ease-in-out;
  ${(props) =>
    !props.isVisible &&
    css`
      max-height: 2.5rem;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div`
  width: 90%;
  margin: 0;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: red;
    background-color: burlywood;
  }
`;
