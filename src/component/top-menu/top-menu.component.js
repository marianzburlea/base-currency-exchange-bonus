import React from "react";
import { Link } from "@reach/router";
import { TopMenuWrapper } from "./top-menu.style";

const TopMenu = () => {
  return (
    <TopMenuWrapper>
      <Link to="/">
        <span className="exchange-home" />
        <span className="top-menu__label">Home Page</span>
      </Link>
      <Link to="/about">
        <span className="exchange-info" />
        <span className="top-menu__label">About</span>
      </Link>
      <Link to="/exchange">
        <span className="exchange-coin-pound" />
        <span className="top-menu__label">Exchange Rate</span>
      </Link>
    </TopMenuWrapper>
  );
};

export default TopMenu;
