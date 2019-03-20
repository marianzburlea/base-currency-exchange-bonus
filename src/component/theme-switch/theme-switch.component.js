import React from "react";
import { themeList } from "./theme-switch.data";
import {
  ThemeSwitchStyled,
  ThemeSwitchStyledWrapper
} from "./theme-switch.style";

const ThemeSwitch = () => {
  const switchTheme = colorList => {
    Object.keys(colorList).forEach(color =>
      document.documentElement.style.setProperty(color, colorList[color])
    );
  };
  return (
    <ThemeSwitchStyledWrapper>
      {themeList.map(({ name, colorList }) => (
        <ThemeSwitchStyled
          href="#"
          color={colorList["--color-currency"]}
          onClick={() => switchTheme(colorList)}
          title={name}
        />
      ))}
    </ThemeSwitchStyledWrapper>
  );
};

export default ThemeSwitch;
