import logo from "./logo.svg";
import "./App.css";
import Paper from "./components/paper/Paper";
import Engineer from "./components/engineer/Engineer";
import Plane from "./components/plane/Plane";
import "./style/RowComponent.css";

function App() {
  return (
    <div>
      <Paper />
      <Engineer />
      <Plane />
    </div>
  );
}
export default App;
