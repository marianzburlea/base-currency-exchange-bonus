import styled from "styled-components";

export const TopMenuWrapper = styled.nav`
  background-color: var(--color-gray-header);
  transition: 0.1s;
  display: flex;
  justify-content: space-around;

  // o sa zic ceva
  a {
    padding: 1rem 0;
    text-decoration: none;
    color: var(--color-dark);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    font-weight: bold;

    &:hover {
      background-color: var(--color-dark);
      color: var(--color-gray-header);
    }
  }
`;
