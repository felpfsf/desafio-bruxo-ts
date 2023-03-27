import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  position: relative;
  & h1 {
    position: absolute;
    top: 45%;
    font-family: ${({ theme }) => theme.fontFamilies.title};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 50%;
  }
`;

export const ImageBox = styled.div`
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 25%;
  }
`;
