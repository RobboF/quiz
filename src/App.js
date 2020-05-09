import React from "react";
import Music from "./pages/music";
import Films from "./pages/images"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
    <h1> Quiz!</h1>
    <Router>
      <Switch>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/film">
          <Films/>
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
    </>
  );
}
