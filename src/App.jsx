import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div
      style={{
        backgroundImage: ``,
        backgroundSize: "cover",
        overflow: "scroll",
        height: "100vh",
      }}
    >
      <Navbar />
      <div className="app">
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
