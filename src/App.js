import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/pages/Project";
import ContactPage from "./components/pages/ContactPage";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/ContactPage" component={ContactPage} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
