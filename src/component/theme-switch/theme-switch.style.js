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
  width: 24px;
  height: 24px;
  background-color: ${({ color }) => color};
  transition: 0.1s;

  &:hover {
    width: 48px;
  }
`;
