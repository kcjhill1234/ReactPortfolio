import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import { Header } from "semantic-ui-react";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/images/background.JPG')`,
        backgroundSize: "cover",
        overflow: "scroll",
        height: "100vh",
      }}
    >
      <Navbar />
      <Header size="huge">Header</Header>

      <div className="page">
        <div className="content">
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
      <Footer />
    </div>
  );
}

export default App;
