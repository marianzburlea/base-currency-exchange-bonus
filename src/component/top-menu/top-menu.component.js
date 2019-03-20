import React from "react";
import { Link } from "@reach/router";
import { TopMenuWrapper } from "./top-menu.style";

const TopMenu = () => {
  return (
    <TopMenuWrapper>
      <Link to="/">Home Page</Link>
      <Link to="/about">About</Link>
      <Link to="/exchange">Exchange Rate</Link>
    </TopMenuWrapper>
  );
};

export default TopMenu;
