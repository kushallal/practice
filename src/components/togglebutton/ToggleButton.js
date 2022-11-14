import classNames from "classnames";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import restApiHelper from "../../helpers/RestApiHelper";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleChange = () => {
    const toggleValue = document.getElementById("checkbox");

    if (toggleValue.checked) {
      restApiHelper.setThemeValue(true);
      setTheme(true);
    } else {
      restApiHelper.setThemeValue(false);
      setTheme(false);
    }
  };

  return (
    <div>
      <label className="switch">
        <input
          onChange={() => toggleChange()}
          id="checkbox"
          type="checkbox"
          checked={classNames({ checked: theme })}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
