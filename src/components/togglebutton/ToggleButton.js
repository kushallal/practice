import React, { useContext } from "react";
import { ThemeContext } from "../../Context";

function ToggleButton() {
  const { setTheme } = useContext(ThemeContext);

  const toggleChange = () => {
    const toggleValue = document.getElementById("checkbox");

    if (toggleValue.checked) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  return (
    <div>
      <label className="switch">
        <input onChange={() => toggleChange()} id="checkbox" type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
