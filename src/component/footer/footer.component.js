import React from "react";
import { FooterStyled } from "./footer.style";

const Footer = () => (
  <FooterStyled>&copy; {+new Date().getFullYear()} ExchangeRator</FooterStyled>
);

export default Footer;
