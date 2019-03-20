import styled from "styled-components";

export const ExchangeRateStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  margin-top: 1rem;
  grid-gap: 1rem;

  input {
    grid-column: 2/3;
  }

  select {
    grid-column: 3/4;
  }
`;
