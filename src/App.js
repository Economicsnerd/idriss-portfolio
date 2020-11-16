import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import Navbar from "./Navbar.js";
import About from "./About.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;
