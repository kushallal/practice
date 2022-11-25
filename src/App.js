import "./App.css";
import { useEffect, useState } from "react";
import Paper from "./components/paper/Paper";
import Engineer from "./components/engineer/Engineer";
import Plane from "./components/plane/Plane";
import NavBar from "./components/navbar/NavBar";
import restApiHelper from "./helpers/RestApiHelper";
import applyTheme from "./helpers/ApplyTheme";

const App = () => {
  const defaultTheme = () => {
    const themeDark = restApiHelper.getThemeValue();

    if (themeDark === true) {
      applyTheme.darkTheme();
    } else {
      applyTheme.lightTheme();
    }
  };

  useEffect(() => {
    defaultTheme();
  }, []);

  return (
    <div className="flex">
      <NavBar />
      <Paper />
      <Engineer />
      <Plane />
    </div>
  );
};
export default App;
