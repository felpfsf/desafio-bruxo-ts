import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 50%;
    position: relative;
    & h1 {
      position: absolute;
      top: 45%;
      font-family: ${({ theme }) => theme.title};
      font-size: ${({ theme }) => theme.large};
      font-weight: 700;
    }
  }
`;

export const ImageBox = styled.div`
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    width: 25%;
  }
`;
