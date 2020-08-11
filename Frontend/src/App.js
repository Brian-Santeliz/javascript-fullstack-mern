import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import AboutDinamic from "./components/AboutDinamic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about/:id" component={AboutDinamic} />
      </Switch>
    </Router>
  );
}

export default App;
