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
import paperHelper from "./helpers/PaperHelper";
import engineerHelper from "./helpers/EngineerHelper";
import planeHelper from "./helpers/PlaneHelper";

const App = () => {
  const { paperOptions, papers, savePaper, deletePaper } =
    paperHelper.usePapers();
  const { engineers, saveEngineer, deleteEngineer } =
    engineerHelper.useEngineers();
  const {
    planes,
    savePlane,
    deletePlane,
    displayPaperOptions,
    displayEngineerOptions,
  } = planeHelper.usePlane();
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
        <Paper
          paperOptions={paperOptions}
          papers={papers}
          savePaper={savePaper}
          deletePaper={deletePaper}
        />
        <Engineer
          engineers={engineers}
          saveEngineer={saveEngineer}
          deleteEngineer={deleteEngineer}
        />
        <Plane
          planes={planes}
          savePlane={savePlane}
          deletePlane={deletePlane}
          displayPaperOptions={displayPaperOptions}
          displayEngineerOptions={displayEngineerOptions}
          papers={papers}
          engineers={engineers}
        />
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
