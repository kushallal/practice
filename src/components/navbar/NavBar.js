import React, { useContext } from "react";
import ToggleButton from "../togglebutton/ToggleButton";
import { ThemeContext } from "../../Context";
import classNames from "classnames";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={classNames({ navbar__light: !theme }, { navbar__dark: theme })}
    >
      <h1>Paper Planes</h1>
      <ToggleButton />
    </div>
  );
};

export default NavBar;
