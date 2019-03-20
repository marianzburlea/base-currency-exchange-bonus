import styled from "styled-components";

export const TopMenuWrapper = styled.nav`
  background: linear-gradient(
    to bottom,
    var(--color-rose) 0%,
    var(--color-lipstick) 60%,
    var(--color-wild-strawberry) 100%
  );
  transition: 0.1s;
  display: flex;
  justify-content: space-around;

  // o sa zic ceva
  a {
    padding: 1rem 0;
    text-decoration: none;
    color: var(--color-light);
    width: 100%;
    text-align: center;

    &:hover {
      background: linear-gradient(
        to bottom,
        var(--color-lipstick) 0%,
        var(--color-rose) 60%,
        var(--color-wild-strawberry) 100%
      );
    }
  }
`;
