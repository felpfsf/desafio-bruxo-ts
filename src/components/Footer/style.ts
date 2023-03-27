import styled from "styled-components";

export const Container = styled.footer`
  padding: 1.5rem;
  flex-shrink: 0;
  & div {
    max-width: 1740px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  & h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  & h3,
  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  & a {
    font-weight: 600;
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
  }
`;
