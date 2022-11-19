import React, { useEffect } from "react";
import restApiHelper from "../../helpers/RestApiHelper";
import applyTheme from "../../helpers/ApplyTheme";

function ToggleButton() {
  const themeValue = restApiHelper.getThemeValue();

  const toggleChange = () => {
    const toggleValue = document.getElementById("checkbox");
    if (toggleValue.checked) {
      restApiHelper.setThemeValue(true);
      applyTheme.darkTheme();
    } else {
      applyTheme.lightTheme();
      restApiHelper.setThemeValue(false);
    }
  };

  return (
    <div>
      <label className="switch">
        <input
          onChange={() => toggleChange()}
          id="checkbox"
          type="checkbox"
          defaultChecked={themeValue}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
