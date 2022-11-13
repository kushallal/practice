import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Paper from "./components/paper/Paper";
import Engineer from "./components/engineer/Engineer";
import Plane from "./components/plane/Plane";
import NavBar from "./components/navbar/NavBar";

import classNames from "classnames";
import { ThemeContext } from "./Context";

function App() {
  const [theme, setTheme] = useState(false);

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
}
export default App;
