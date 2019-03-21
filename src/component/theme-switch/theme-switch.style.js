import styled from "styled-components";

export const ThemeSwitchStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 1rem;
  right: 0;
  z-index: 1;
  overflow: hidden;
`;

export const ThemeSwitchStyled = styled.a`
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  margin-bottom: 0.1rem;
  display: inline-block;
  width: 12px;
  height: 24px;
  background-color: ${({ color }) => color};
  transition: 0.25s;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  border: 1px solid var(--color-light);

  &:hover {
    width: 48px;
  }

  &:hover + a {
    width: 36px;
  }

  &:hover + a + a {
    width: 24px;
  }
`;
