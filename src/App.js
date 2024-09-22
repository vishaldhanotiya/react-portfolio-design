import "./App.css";
import { useContext } from "react";
import Portfolio from "../src/components/Portfolio.tsx";
import { ThemeContext } from "./components/ThemeProvider.tsx";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log("theme=======", theme);
  return (
    <div className={`App ${theme}`}>
      <Portfolio />
    </div>
  );
}

export default App;
