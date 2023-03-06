import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
`;

export const ImageBox = styled.div`
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
