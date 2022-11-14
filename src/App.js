import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Paper from "./components/paper/Paper";
import Engineer from "./components/engineer/Engineer";
import Plane from "./components/plane/Plane";
import NavBar from "./components/navbar/NavBar";
import restApiHelper from "./helpers/RestApiHelper";
import classNames from "classnames";
import { ThemeContext } from "./Context";

const App = () => {
  const defaultTheme = () => {
    const themeDark = restApiHelper.getThemeValue();

    if (themeDark !== null) {
      if (themeDark === true) {
        return true;
      }
    }
  };

  const [theme, setTheme] = useState(() => defaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={classNames({ flex__light: !theme }, { flex__dark: theme })}
      >
        <NavBar />
        <Paper />
        <Engineer />
        <Plane />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
