import styled from "styled-components";

export const RateListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1/5;
  grid-row-start: 2;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    h4 {
      flex-grow: 1;
    }
  }
`;

export const RateItemStyled = styled.div`
  border: 2px solid var(--color-currency);
  background-color: var(--color-currency);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  color: var(--color-light);
  position: relative;
  padding-left: 80px;
  display: inline-block;
  flex-basis: 10%;
  flex-grow: 1;
  overflow: hidden;
  transition: 0.2s;
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  text-shadow: ${({ selected }) =>
    selected ? "1px 1px 1px var(--color-dark)" : "unset"};
  display: flex;
  justify-content: space-between;

  &:hover span {
    color: var(--color-dark);
  }

  &::before {
    transition: 0.2s;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    content: attr(data-key);
    background-color: var(--color-text-background);
    color: var(--color-dark);
  }
`;
