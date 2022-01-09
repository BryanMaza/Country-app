import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const changeTheme = () => {
    setDarkMode((value) => !value);
  };

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Navbar darkmode={darkMode} changeTheme={changeTheme} />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/country' exact component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
