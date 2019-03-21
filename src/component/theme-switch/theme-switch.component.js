import React, { useEffect } from "react";
import { themeList } from "./theme-switch.data";
import {
  ThemeSwitchStyled,
  ThemeSwitchStyledWrapper
} from "./theme-switch.style";

const switchTheme = colorList => {
  window.localStorage.setItem("theme", JSON.stringify(colorList));
  Object.keys(colorList).forEach(color =>
    document.documentElement.style.setProperty(color, colorList[color])
  );
};

const ThemeSwitch = () => {
  useEffect(() => {
    let rememberedTheme = JSON.parse(window.localStorage.getItem("theme"));
    // if it's not set
    if (!rememberedTheme) {
      rememberedTheme = themeList.reduce(t => t).colorList;
    }
    // if it's set
    switchTheme(rememberedTheme);
  }, []);
  return (
    <ThemeSwitchStyledWrapper>
      {themeList.map(({ name, colorList }, key) => (
        <ThemeSwitchStyled
          href="#"
          key={key}
          color={colorList["--color-currency"]}
          onClick={() => switchTheme(colorList)}
          title={name}
        />
      ))}
    </ThemeSwitchStyledWrapper>
  );
};

export default ThemeSwitch;
